"use client"
import { useState, useEffect, useRef } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { CategoryData } from '@/lib/parseProducts'
import { Tool } from '@/lib/catalogue'
import ProductCard from '@/components/ProductCard'
import ProductLightbox from '@/components/ProductLightbox'
import './catalogue.css'
import './catalogue-subcategories.css'
import { ChevronDown, ChevronRight, Search } from 'lucide-react'

interface CatalogueClientProps {
    categories: CategoryData[];
}

export default function CatalogueClient({ categories }: CatalogueClientProps) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
    
    const [activeCategory, setActiveCategory] = useState<string>(searchParams.get('category') || 'All')
    const [activeSubcategory, setActiveSubcategory] = useState<string>(searchParams.get('subcategory') || 'All')
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [selectedProduct, setSelectedProduct] = useState<Tool | null>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    // Sync with URL search params when they change
    useEffect(() => {
        const cat = searchParams.get('category')
        const sub = searchParams.get('subcategory')
        const query = searchParams.get('search')
        const toolId = searchParams.get('tool')

        if (cat) setActiveCategory(cat)
        if (sub) setActiveSubcategory(sub)
        if (query) setSearchQuery(query)
        
        // Handle tool deep link
        if (toolId) {
            const allProducts = categories.flatMap(c => c.subcategories.flatMap(s => s.products))
            const product = allProducts.find(p => p.id === toolId)
            if (product) {
                setSelectedProduct(product)
            }
        } else {
            setSelectedProduct(null)
        }
    }, [searchParams, categories])

    // When searching, ignore category/subcategory filters and search globally
    const filteredProducts = searchQuery.trim()
        ? categories.flatMap(cat =>
            cat.subcategories.flatMap(sub =>
                sub.products.filter(p =>
                    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    p.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    p.subcategory.toLowerCase().includes(searchQuery.toLowerCase())
                )
            )
        )
        : categories.flatMap(cat =>
            (activeCategory === 'All' || cat.name === activeCategory)
                ? cat.subcategories.flatMap(sub =>
                    (activeSubcategory === 'All' || sub.name === activeSubcategory)
                        ? sub.products
                        : []
                )
                : []
        )

    const scrollToContent = () => {
        setTimeout(() => {
            if (contentRef.current) {
                const y = contentRef.current.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 50);
    }

    const handleCategoryClick = (categoryName: string) => {
        const params = new URLSearchParams(searchParams.toString())
        if (activeCategory === categoryName && categoryName !== 'All') {
            setActiveCategory('All')
            setActiveSubcategory('All')
            params.set('category', 'All')
            params.set('subcategory', 'All')
        } else {
            setActiveCategory(categoryName)
            setActiveSubcategory('All')
            params.set('category', categoryName)
            params.set('subcategory', 'All')
        }
        router.push(`${pathname}?${params.toString()}`, { scroll: false })
        scrollToContent()
    }

    const handleSubcategoryClick = (subcategoryName: string, e: React.MouseEvent) => {
        e.stopPropagation()
        setActiveSubcategory(subcategoryName)
        const params = new URLSearchParams(searchParams.toString())
        params.set('subcategory', subcategoryName)
        router.push(`${pathname}?${params.toString()}`, { scroll: false })
        scrollToContent()
    }

    const handleOpenProduct = (product: Tool) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('tool', product.id)
        router.push(`${pathname}?${params.toString()}`, { scroll: false })
    }

    const handleCloseProduct = () => {
        const params = new URLSearchParams(searchParams.toString())
        params.delete('tool')
        router.push(`${pathname}?${params.toString()}`, { scroll: false })
    }

    return (
        <div className={`catalogue-layout ${searchQuery.trim() ? 'catalogue-searching' : ''}`}>
            {/* Search Bar */}
            <div className="catalogue-top-bar">
                <div className="search-bar-container">
                    <Search className="search-icon" size={20} />
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search tools, categories, or specifications..."
                        value={searchQuery}
                        onChange={(e) => {
                            const val = e.target.value
                            setSearchQuery(val)
                            const params = new URLSearchParams(searchParams.toString())
                            if (val) {
                                params.set('search', val)
                            } else {
                                params.delete('search')
                            }
                            router.push(`${pathname}?${params.toString()}`, { scroll: false })
                        }}
                    />
                </div>
            </div>

            {/* Sidebar / Filter Menu */}
            <aside className="catalogue-sidebar">
                <h2 className="filter-title">Categories</h2>
                <ul className="category-list">
                    <li>
                        <button
                            className={`category-btn ${activeCategory === 'All' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('All')}
                        >
                            All Tools
                        </button>
                    </li>
                    {categories.map((cat, idx) => {
                        const isActive = activeCategory === cat.name;
                        return (
                            <li key={idx}>
                                <button
                                    className={`category-btn ${isActive ? 'active' : ''}`}
                                    onClick={() => handleCategoryClick(cat.name)}
                                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                                >
                                    {cat.name}
                                    {cat.subcategories.length > 0 && (
                                        isActive ? <ChevronDown size={16} /> : <ChevronRight size={16} />
                                    )}
                                </button>

                                {/* Subcategories Dropdown */}
                                {isActive && (
                                    <ul className="subcategory-list">
                                        <li>
                                            <button
                                                className={`subcategory-btn ${activeSubcategory === 'All' ? 'active' : ''}`}
                                                onClick={(e) => handleSubcategoryClick('All', e)}
                                            >
                                                All in {cat.name}
                                            </button>
                                        </li>
                                        {cat.subcategories.map((sub, subIdx) => (
                                            <li key={subIdx}>
                                                <button
                                                    className={`subcategory-btn ${activeSubcategory === sub.name ? 'active' : ''}`}
                                                    onClick={(e) => handleSubcategoryClick(sub.name, e)}
                                                >
                                                    {sub.name}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </aside>

            {/* Product Grid */}
            <div className="catalogue-content" ref={contentRef}>
                <div className="products-header">
                    <h2>
                        {activeCategory === 'All'
                            ? (searchQuery ? 'Search Results' : 'All Products')
                            : activeSubcategory === 'All'
                                ? activeCategory
                                : `${activeCategory} > ${activeSubcategory}`}
                    </h2>
                    <span className="product-count">{filteredProducts.length} items</span>
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="no-products">
                        <p>No products found in this category.</p>
                    </div>
                ) : (
                    <div className="product-grid">
                        {filteredProducts.map((product) => (
                            <ProductCard 
                                key={`${product.category}-${product.subcategory}-${product.id}`} 
                                product={product} 
                                onOpenProduct={handleOpenProduct}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Global Lightbox */}
            {selectedProduct && (
                <ProductLightbox 
                    product={selectedProduct} 
                    isOpen={!!selectedProduct} 
                    onClose={handleCloseProduct} 
                />
            )}
        </div>
    )
}
