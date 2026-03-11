import fs from 'fs'
import path from 'path'

export interface ProductImage {
    url: string;
    name: string;
}

export interface Product {
    id: string;
    name: string;
    description?: string;
    category: string;
    subcategory: string;
    images: ProductImage[];
}

export interface CategoryData {
    name: string;
    subcategories: {
        name: string;
        products: Product[];
    }[];
}

export function getProducts(): CategoryData[] {
    const productsDir = path.join(process.cwd(), 'public', 'website products')

    if (!fs.existsSync(productsDir)) {
        return []
    }

    const categories: CategoryData[] = []

    // Read depth 1: Categories
    const categoryFolders = fs.readdirSync(productsDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)

    for (const category of categoryFolders) {
        const categoryPath = path.join(productsDir, category)

        // Read depth 2: Subcategories
        const subcategoryFolders = fs.readdirSync(categoryPath, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name)

        const subcategoriesData = []

        for (const subcategory of subcategoryFolders) {
            const subcategoryPath = path.join(categoryPath, subcategory)

            // Read depth 3: Products
            const productsData: Product[] = []

            // Helper to crawl directories deeply within a subcategory
            function findProductsRecursively(currentPath: string, relativePathSoFar: string[]) {
                const entries = fs.readdirSync(currentPath, { withFileTypes: true })
                const subDirs = entries.filter(e => e.isDirectory() && !e.name.startsWith('.'))

                // Find if this current directory has image files directly inside it
                const imageFiles = entries
                    .filter(e => e.isFile() && !e.name.startsWith('.') && /\.(jpe?g|png|gif|webp|avif|svg)$/i.test(e.name))
                    .map(e => e.name)

                if (imageFiles.length > 0) {
                    // This directory is a product because it has images!
                    const folderName = path.basename(currentPath);

                    // Read description from txt if it exists
                    let descriptionStr = ''
                    const txtFiles = entries.filter(e => e.isFile() && e.name.toLowerCase().endsWith('.txt')).map(e => e.name)
                    if (txtFiles.length > 0) {
                        try {
                            descriptionStr = fs.readFileSync(path.join(currentPath, txtFiles[0]), 'utf-8').trim()
                        } catch { /* ignore read errors */ }
                    }

                    productsData.push({
                        id: `${relativePathSoFar.join('-')}-${folderName}`,
                        name: folderName,
                        description: descriptionStr,
                        category,
                        subcategory,
                        images: imageFiles.map(file => ({
                            name: file,
                            url: encodeURI(`/website products/${category}/${subcategory}/${[...relativePathSoFar, file].join('/')}`)
                        }))
                    })
                }

                // Keep digging for more products in subdirectories
                for (const dir of subDirs) {
                    findProductsRecursively(path.join(currentPath, dir.name), [...relativePathSoFar, dir.name])
                }
            }

            findProductsRecursively(subcategoryPath, [])

            if (productsData.length > 0) {
                subcategoriesData.push({
                    name: subcategory,
                    products: productsData
                })
            }
        }

        if (subcategoriesData.length > 0) {
            categories.push({
                name: category,
                subcategories: subcategoriesData
            })
        }
    }

    return categories
}

export function getAllProductsFlat(): Product[] {
    const categories = getProducts()
    const flat: Product[] = []

    for (const cat of categories) {
        for (const subcat of cat.subcategories) {
            for (const prod of subcat.products) {
                flat.push(prod)
            }
        }
    }

    return flat
}
