import { catalogue, Tool } from './catalogue'

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
    price?: string;
    isOnOffer?: boolean;
    originalPrice?: number;
    offerPrice?: number;
    isBestseller?: boolean;
}

export interface CategoryData {
    name: string;
    subcategories: {
        name: string;
        products: Tool[];
    }[];
}

export function getStaticProducts(): CategoryData[] {
    const categories: CategoryData[] = []
    
    catalogue.forEach(tool => {
        let cat = categories.find(c => c.name === tool.category)
        if (!cat) {
            cat = { name: tool.category, subcategories: [] }
            categories.push(cat)
        }
        
        let subcat = cat.subcategories.find(s => s.name === tool.subcategory)
        if (!subcat) {
            subcat = { name: tool.subcategory, products: [] }
            cat.subcategories.push(subcat)
        }
        
        subcat.products.push(tool)
    })
    
    // Sort categories and subcategories by name for consistency
    categories.sort((a,b) => a.name.localeCompare(b.name));
    categories.forEach(c => c.subcategories.sort((a,b) => a.name.localeCompare(b.name)));
    
    return categories
}

// Redirect getProducts to use the new static catalogue for everything
export function getProducts(): CategoryData[] {
    return getStaticProducts();
}

export function getAllProductsFlat(): Tool[] {
    return [...catalogue];
}
