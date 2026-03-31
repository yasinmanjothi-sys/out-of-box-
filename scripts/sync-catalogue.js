const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');
const mammoth = require('mammoth');

// Configuration
const PROJECT_ROOT = path.resolve(__dirname, '..');
const PRODUCTS_DIR = path.join(PROJECT_ROOT, 'public', 'website products');
const EXCEL_FILE = path.join(PRODUCTS_DIR, 'Updated pricelist 12.03.26 - Copy.xlsx');
const OUTPUT_FILE = path.join(PROJECT_ROOT, 'src', 'lib', 'catalogue.ts');

const IMAGE_EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.jfif'];
const TXT_EXTS = ['.txt'];
const DOCX_EXTS = ['.docx'];

/**
 * Normalizes strings for matching
 */
function normalize(str) {
    if (!str) return '';
    // Remove special chars, spaces, and lowercase
    return str.toString().trim().toLowerCase()
        .replace(/[^a-z0-9]/g, '');
}

/**
 * Extracts product code from a string (e.g., "TH308268-2 - Name" -> "TH308268-2")
 */
function extractCode(str) {
    if (!str) return '';
    const match = str.match(/^[a-z0-9-]+/i);
    return match ? match[0].toLowerCase() : '';
}

/**
 * Recursively walks directory to get all files
 */
function getAllFiles(dir, baseDir) {
    let results = [];
    if (!fs.existsSync(dir)) return [];
    
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllFiles(filePath, baseDir));
        } else {
            results.push({
                name: file,
                path: filePath,
                relativeUrl: '/' + encodeURI(path.relative(path.join(PROJECT_ROOT, 'public'), filePath).split(path.sep).join('/'))
            });
        }
    });
    return results;
}

/**
 * Extracts text from .txt or .docx
 */
async function extractDescription(files) {
    // Priority: specs.txt, specs.docx, other .txt, other .docx
    const priority = ['specs.txt', 'specs.docx', 'description.txt', 'description.docx'];
    
    for (const pName of priority) {
        const found = files.find(f => f.name.toLowerCase() === pName);
        if (found) {
            if (found.name.toLowerCase().endsWith('.txt')) {
                return fs.readFileSync(found.path, 'utf8').trim();
            } else if (found.name.toLowerCase().endsWith('.docx')) {
                try {
                    const result = await mammoth.extractRawText({ path: found.path });
                    return result.value.trim();
                } catch (e) {
                    console.error(`Error reading docx: ${found.path}`, e);
                }
            }
        }
    }
    
    // Any remaining txt or docx
    for (const f of files) {
        if (TXT_EXTS.includes(path.extname(f.name).toLowerCase())) {
            return fs.readFileSync(f.path, 'utf8').trim();
        }
        if (DOCX_EXTS.includes(path.extname(f.name).toLowerCase())) {
            try {
                const result = await mammoth.extractRawText({ path: f.path });
                return result.value.trim();
            } catch (e) {}
        }
    }
    
    return '';
}

/**
 * Parses the Excel file and returns a map of product codes/names to prices
 */
function getPricingMap() {
    console.log('📖 Reading Excel File...', EXCEL_FILE);
    const workbook = XLSX.readFile(EXCEL_FILE);
    const sheet = workbook.Sheets['Sheet1'];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    const priceMap = new Map();
    data.forEach((row, index) => {
        if (index === 0) return; // Skip header
        const rawName = row[2];
        const price = row[3];
        if (rawName && price !== undefined) {
            const normName = normalize(rawName);
            const code = extractCode(rawName);
            
            // Map by full name, normalized name, and code
            priceMap.set(normName, price);
            if (code && code.length > 3) {
                priceMap.set(code, price);
            }
        }
    });
    console.log(`✅ Loaded pricing for ${priceMap.size} unique identifiers.`);
    return priceMap;
}

/**
 * Smarter Price Finder
 */
function findPrice(folderName, pricingMap) {
    const normFolder = normalize(folderName);
    const folderCode = extractCode(folderName);
    
    // 1. Exact normalized match
    if (pricingMap.has(normFolder)) return pricingMap.get(normFolder);
    
    // 2. Code-based match
    if (folderCode && pricingMap.has(folderCode)) return pricingMap.get(folderCode);
    
    // 3. Reverse match: Does any Excel key contain this code?
    for (const [key, value] of pricingMap.entries()) {
        if (folderCode && key.includes(folderCode)) return value;
        if (normFolder && key.includes(normFolder)) return value;
    }
    
    return null;
}

/**
 * Main Sync Function
 */
async function sync() {
    console.log('🔄 Starting Synchronisation (Robust Mode)...');

    if (!fs.existsSync(PRODUCTS_DIR)) {
        console.error('❌ Products directory not found!');
        return;
    }

    const pricing = getPricingMap();
    const products = [];
    const missingImages = [];
    /**
     * Smarter helper to process a product folder
     */
    async function processProduct(category, subcategory, folderName, prodPath) {
        const allFiles = getAllFiles(prodPath, prodPath);

        // Images
        const images = allFiles.filter(f => IMAGE_EXTS.includes(path.extname(f.name).toLowerCase()))
            .map(f => ({ name: f.name, url: f.relativeUrl }));

        if (images.length === 0) {
            missingImages.push(`[${category}] > [${subcategory}] > ${folderName}`);
        }

        // Description
        let description = await extractDescription(allFiles);
        if (!description) {
            description = `Professional ${subcategory} from the ${category} collection. High-quality engineering for reliable performance.`;
        }

        // Price
        const price = findPrice(folderName, pricing);

        // Generate ID
        const id = folderName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

        products.push({
            id: id,
            name: folderName,
            description: description,
            category: category,
            subcategory: subcategory,
            images: images,
            price: price ? price.toString() : '',
            isOnOffer: false,
            isBestseller: false,
            originalPrice: 0,
            offerPrice: 0
        });
    }

    const categories = fs.readdirSync(PRODUCTS_DIR).filter(f => {
        return fs.statSync(path.join(PRODUCTS_DIR, f)).isDirectory();
    });

    for (const category of categories) {
        const catPath = path.join(PRODUCTS_DIR, category);
        const entries = fs.readdirSync(catPath).filter(f => {
            return fs.statSync(path.join(catPath, f)).isDirectory();
        });

        for (const entry of entries) {
            const entryPath = path.join(catPath, entry);
            const subfolders = fs.readdirSync(entryPath).filter(f => {
                return fs.statSync(path.join(entryPath, f)).isDirectory();
            });

            // If entry has subfolders, it's a subcategory folder with products inside it
            if (subfolders.length > 0) {
                for (const folderName of subfolders) {
                    const prodPath = path.join(entryPath, folderName);
                    await processProduct(category, entry, folderName, prodPath);
                }
            } else {
                // If entry has no subfolders, it's likely a product folder directly under the category
                await processProduct(category, category, entry, entryPath);
            }
        }
    }

    // Generate File Content
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
    console.log(`✨ Successfully synchronised ${products.length} products to ${OUTPUT_FILE}`);

    // Missing Images Report
    const reportPath = path.join(PROJECT_ROOT, 'missing-images-report.txt');
    const reportContent = `Missing Images Audit Report - Generated at ${new Date().toISOString()}\n\nProducts with 0 images found in their folders:\n\n${missingImages.join('\n')}\n`;
    fs.writeFileSync(reportPath, reportContent);
    console.log(`📋 Missing images report generated: ${reportPath}`);
}

sync().catch(console.error);
