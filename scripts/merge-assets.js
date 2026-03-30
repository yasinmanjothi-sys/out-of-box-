const fs = require('fs');
const path = require('path');

// Configuration
const PROJECT_ROOT = path.resolve(__dirname, '..');
const SOURCE_DIR = path.join(PROJECT_ROOT, 'OneDrive_1_30-03-2026');
const DEST_DIR = path.join(PROJECT_ROOT, 'public', 'website products');

const IMAGE_EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];
const DESC_EXTS = ['.txt', '.docx', '.doc'];

/**
 * Recursively copies assets from source to destination
 */
function mergeFolders(src, dest) {
    if (!fs.existsSync(src)) return 0;
    let counts = { folders: 0, files: 0 };

    if (!fs.existsSync(dest)) {
        console.log(`📂 Creating missing target folder: ${path.relative(PROJECT_ROOT, dest)}`);
        fs.mkdirSync(dest, { recursive: true });
    }

    const items = fs.readdirSync(src);
    items.forEach(item => {
        const srcPath = path.join(src, item);
        const destPath = path.join(dest, item);
        const stat = fs.statSync(srcPath);

        if (stat.isDirectory()) {
            const result = mergeFolders(srcPath, destPath);
            counts.folders += result.folders;
            counts.files += result.files;
        } else {
            // Copy images and descriptions
            const ext = path.extname(item).toLowerCase();
            if (IMAGE_EXTS.includes(ext) || DESC_EXTS.includes(ext)) {
                if (!fs.existsSync(destPath)) {
                    fs.copyFileSync(srcPath, destPath);
                    counts.files++;
                }
            }
        }
    });

    if (items.some(i => !fs.statSync(path.join(src, i)).isDirectory())) {
        counts.folders++;
    }

    return counts;
}

function runMerge() {
    console.log('🔄 Starting Asset Merge from OneDrive...');
    console.log(`Source: ${SOURCE_DIR}`);
    console.log(`Destination: ${DEST_DIR}`);

    if (!fs.existsSync(SOURCE_DIR)) {
        console.error('❌ Source directory not found!');
        return;
    }

    const summary = { totalFolders: 0, totalFiles: 0 };

    const categories = fs.readdirSync(SOURCE_DIR).filter(f => {
        return fs.statSync(path.join(SOURCE_DIR, f)).isDirectory();
    });

    for (const category of categories) {
        const srcCatPath = path.join(SOURCE_DIR, category);
        const destCatPath = path.join(DEST_DIR, category);

        const subcategories = fs.readdirSync(srcCatPath).filter(f => {
            return fs.statSync(path.join(srcCatPath, f)).isDirectory();
        });

        for (const subcategory of subcategories) {
            const srcSubPath = path.join(srcCatPath, subcategory);
            const destSubPath = path.join(destCatPath, subcategory);

            // Re-list products to merge
            const productFolders = fs.readdirSync(srcSubPath).filter(f => {
                return fs.statSync(path.join(srcSubPath, f)).isDirectory();
            });

            for (const product of productFolders) {
                const srcPath = path.join(srcSubPath, product);
                const destPath = path.join(destSubPath, product);

                const result = mergeFolders(srcPath, destPath);
                summary.totalFolders += result.folders;
                summary.totalFiles += result.files;
                if (result.files > 0) {
                    console.log(`✅ Merged ${result.files} files for: ${category} > ${subcategory} > ${product}`);
                }
            }
        }
    }

    console.log('\n--- MERGE COMPLETE ---');
    console.log(`Total Products Updated: ${summary.totalFolders}`);
    console.log(`Total New Assets Added: ${summary.totalFiles}`);
    console.log('----------------------\n');
}

runMerge();
