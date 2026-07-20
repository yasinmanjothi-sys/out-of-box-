const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');
const pdfParse = require('pdf-parse');

// Configuration
const PROJECT_ROOT = path.resolve(__dirname, '..');
const PRODUCTS_DIR = path.join(PROJECT_ROOT, 'public', 'Website Products');
const OUTPUT_FILE = path.join(PROJECT_ROOT, 'src', 'lib', 'catalogue.ts');

// Extensions that are definitively NOT images — everything else is treated as an image
const NON_IMAGE_EXTS = new Set([
    '.txt', '.docx', '.doc', '.pdf',
    '.xlsx', '.xls', '.xmp',
    '.js', '.ts', '.json', '.md', '.zip'
]);

// Extensions we consider spec/text documents
const SPEC_EXTS = new Set(['.txt', '.docx', '.pdf']);

// Regex to detect PRICE and OFFER PRICE lines
const PRICE_REGEX = /^PRICE\s+(\d+(?:\.\d+)?)/im;
const OFFER_PRICE_REGEX = /^OFFER\s+PRICE\s+(\d+(?:\.\d+)?)/im;

/**
 * Recursively walks directory to get all files
 */
function getAllFiles(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return [];

    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllFiles(filePath));
        } else {
            results.push({
                name: file,
                path: filePath,
                relativeUrl: '/' + path.relative(path.join(PROJECT_ROOT, 'public'), filePath)
                    .split(path.sep)
                    .map(segment => encodeURIComponent(segment))
                    .join('/')
            });
        }
    });
    return results;
}

/**
 * Extracts raw text from a single file based on its extension
 */
async function extractTextFromFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    try {
        if (ext === '.txt') {
            return fs.readFileSync(filePath, 'utf8');
        } else if (ext === '.docx') {
            const result = await mammoth.extractRawText({ path: filePath });
            return result.value;
        } else if (ext === '.pdf') {
            const buffer = fs.readFileSync(filePath);
            const result = await pdfParse(buffer);
            return result.text;
        }
    } catch (e) {
        console.warn(`  ⚠️  Could not read ${path.basename(filePath)}: ${e.message}`);
    }
    return '';
}

/**
 * Reads ALL spec files in a product folder, merges text, extracts prices.
 * Returns { description: string, price: string, offerPrice: string }
 */
async function extractDescription(files) {
    const specFiles = files.filter(f => SPEC_EXTS.has(path.extname(f.name).toLowerCase()));

    if (specFiles.length === 0) return { description: '', price: '', offerPrice: '' };

    // Priority order for reading spec files
    const priorityNames = ['specs.txt', 'specs.docx', 'description.txt', 'description.docx'];
    const ordered = [];

    // Add priority files first (in order)
    for (const pName of priorityNames) {
        const found = specFiles.find(f => f.name.toLowerCase() === pName);
        if (found) ordered.push(found);
    }
    // Append any remaining spec files not already in the list
    for (const f of specFiles) {
        if (!ordered.includes(f)) ordered.push(f);
    }

    // Read all spec files and merge lines (deduplicate, preserve first-seen order)
    const seenLines = new Map(); // trimmed line -> true
    let priceValue = '';
    let offerPriceValue = '';

    for (const f of ordered) {
        const text = await extractTextFromFile(f.path);
        if (!text.trim()) continue;

        const lines = text.split(/\r?\n/);
        for (const rawLine of lines) {
            const line = rawLine.trimEnd(); // preserve leading indent but strip trailing whitespace
            const trimmed = line.trim();

            // Check for PRICE line — capture first match, strip all occurrences
            const priceMatch = trimmed.match(PRICE_REGEX);
            if (priceMatch) {
                if (!priceValue) priceValue = priceMatch[1];
                continue; // don't include PRICE line in description
            }

            // Check for OFFER PRICE line — capture first match, strip all occurrences
            const offerPriceMatch = trimmed.match(OFFER_PRICE_REGEX);
            if (offerPriceMatch) {
                if (!offerPriceValue) offerPriceValue = offerPriceMatch[1];
                continue; // don't include OFFER PRICE line in description
            }

            // Deduplicate by trimmed content (handles minor whitespace differences)
            if (!seenLines.has(trimmed)) {
                seenLines.set(trimmed, line);
            }
        }
    }

    // Rebuild description from ordered unique lines
    let description = Array.from(seenLines.values()).join('\n').trim();

    // Collapse runs of more than 2 consecutive blank lines
    description = description.replace(/\n{3,}/g, '\n\n');

    return { description, price: priceValue, offerPrice: offerPriceValue };
}

/**
 * Main Sync Function
 */
async function sync() {
    console.log('🔄 Starting Synchronisation...');

    if (!fs.existsSync(PRODUCTS_DIR)) {
        console.error('❌ Products directory not found!');
        return;
    }

    const products = [];
    const missingImages = [];
    const bestSellersPath = path.join(PRODUCTS_DIR, 'Best Sellers');
    const bestSellersFolders = fs.existsSync(bestSellersPath)
        ? fs.readdirSync(bestSellersPath).filter(f =>
            fs.statSync(path.join(bestSellersPath, f)).isDirectory()
        )
        : [];

    const monthlyOffersPath = path.join(PRODUCTS_DIR, 'monthly offers');
    const monthlyOffersFolders = fs.existsSync(monthlyOffersPath)
        ? fs.readdirSync(monthlyOffersPath).filter(f =>
            fs.statSync(path.join(monthlyOffersPath, f)).isDirectory()
        )
        : [];

    /**
     * Processes a single product folder
     */
    async function processProduct(category, subcategory, folderName, prodPath) {
        const allFiles = getAllFiles(prodPath);

        // Images — accept everything except known non-image extensions
        const images = allFiles
            .filter(f => !NON_IMAGE_EXTS.has(path.extname(f.name).toLowerCase()))
            .map(f => ({ name: f.name, url: f.relativeUrl }));

        if (images.length === 0) {
            missingImages.push(`[${category}] > [${subcategory}] > ${folderName}`);
        }

        // Description + Prices from spec files
        const { description: rawDescription, price, offerPrice } = await extractDescription(allFiles);
        const description = rawDescription ||
            `Professional ${subcategory} from the ${category} collection. High-quality engineering for reliable performance.`;

        // Generate ID slug
        const id = folderName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

        // Check if this product is in the Best Sellers folder
        const isBestseller = bestSellersFolders.includes(folderName);

        // Check if this product is in the Monthly Offers folder
        const isOnOffer = monthlyOffersFolders.includes(folderName);

        products.push({
            id,
            name: folderName,
            description,
            category,
            subcategory,
            images,
            price: price ? price.toString() : '',
            isOnOffer,
            isBestseller,
            originalPrice: offerPrice ? parseInt(price) : 0,
            offerPrice: offerPrice ? parseInt(offerPrice) : 0
        });
    }

    const categories = fs.readdirSync(PRODUCTS_DIR).filter(f =>
        fs.statSync(path.join(PRODUCTS_DIR, f)).isDirectory()
    );

    for (const category of categories) {
        const catPath = path.join(PRODUCTS_DIR, category);
        const entries = fs.readdirSync(catPath).filter(f =>
            fs.statSync(path.join(catPath, f)).isDirectory()
        );

        for (const entry of entries) {
            const entryPath = path.join(catPath, entry);
            const subfolders = fs.readdirSync(entryPath).filter(f =>
                fs.statSync(path.join(entryPath, f)).isDirectory()
            );

            if (subfolders.length > 0) {
                // entry is a subcategory — products are inside it
                for (const folderName of subfolders) {
                    const prodPath = path.join(entryPath, folderName);
                    await processProduct(category, entry, folderName, prodPath);
                }
            } else {
                // entry is itself a product folder directly under the category
                await processProduct(category, category, entry, entryPath);
            }
        }
    }

    // Copy originalPrice and offerPrice from Monthly Offers entries to matching products in other categories
    const offerPriceMap = {};
    products.forEach(p => {
        if (p.category === 'Monthly Offers' && p.offerPrice > 0) {
            offerPriceMap[p.name] = { originalPrice: p.originalPrice, offerPrice: p.offerPrice };
        }
    });
    products.forEach(p => {
        if (p.isOnOffer && p.category !== 'Monthly Offers' && offerPriceMap[p.name]) {
            p.originalPrice = offerPriceMap[p.name].originalPrice;
            p.offerPrice = offerPriceMap[p.name].offerPrice;
        }
    });

    // Generate TypeScript output
    const content = `export interface ProductImage {
    url: string;
    name: string;
}

export interface Tool {
    id: string;
    name: string;
    description?: string;
    category: string;
    subcategory: string;
    images: ProductImage[];
    price?: string;
    isOnOffer?: boolean;
    originalPrice?: number;
    offerPrice?: number;
    isBestseller?: boolean;
}

export const catalogue: Tool[] = ${JSON.stringify(products, null, 4)};
`;

    fs.writeFileSync(OUTPUT_FILE, content);

    // Stats
    const withPrice = products.filter(p => p.price !== '').length;
    const noSpecs = products.filter(p =>
        p.description.startsWith(`Professional `)
    ).length;

    console.log(`\n📊 Sync Summary:`);
    console.log(`   Total products:           ${products.length}`);
    console.log(`   Products with prices:     ${withPrice}`);
    console.log(`   Products missing prices:  ${products.length - withPrice}`);
    console.log(`   Products with no specs:   ${noSpecs}`);
    console.log(`\n✨ Catalogue written to ${OUTPUT_FILE}`);

    // Missing images report
    const reportPath = path.join(PROJECT_ROOT, 'missing-images-report.txt');
    const reportContent = `Missing Images Audit Report - Generated at ${new Date().toISOString()}\n\nProducts with 0 images found in their folders:\n\n${missingImages.join('\n')}\n`;
    fs.writeFileSync(reportPath, reportContent);
    console.log(`📋 Missing images report: ${reportPath}`);
}

sync().catch(console.error);
