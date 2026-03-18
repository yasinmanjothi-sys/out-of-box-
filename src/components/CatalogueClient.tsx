"use client"
import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { CategoryData } from '@/lib/parseProducts'
import ProductCard from '@/components/ProductCard'
import './catalogue.css'
import './catalogue-subcategories.css'
import { ChevronDown, ChevronRight, Search } from 'lucide-react'

interface CatalogueClientProps {
    categories: CategoryData[];
}

export default function CatalogueClient({ categories }: CatalogueClientProps) {
    const searchParams = useSearchParams()
    const [activeCategory, setActiveCategory] = useState<string>(searchParams.get('category') || 'All')
    const [activeSubcategory, setActiveSubcategory] = useState<string>(searchParams.get('subcategory') || 'All')
    const [searchQuery, setSearchQuery] = useState<string>('')
    const contentRef = useRef<HTMLDivElement>(null)

    // Sync with URL search params when they change
    useEffect(() => {
        const cat = searchParams.get('category')
        const sub = searchParams.get('subcategory')
        if (cat) setActiveCategory(cat)
        if (sub) setActiveSubcategory(sub)
    }, [searchParams])

    // Get all flat products or filtered by category/subcategory and search query
    const filteredProducts = categories.flatMap(cat =>
        (activeCategory === 'All' || cat.name === activeCategory)
            ? cat.subcategories.flatMap(sub =>
                (activeSubcategory === 'All' || sub.name === activeSubcategory)
                    ? sub.products.filter(p =>
                        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.subcategory.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    : []
            )
            : []
    )

    const scrollToContent = () => {
        setTimeout(() => {
            if (window.innerWidth < 968 && contentRef.current) {
                const y = contentRef.current.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 50);
    }

    const handleCategoryClick = (categoryName: string) => {
        if (activeCategory === categoryName && categoryName !== 'All') {
            // Toggle off if clicking the active category again
            setActiveCategory('All')
            setActiveSubcategory('All')
        } else {
            setActiveCategory(categoryName)
            setActiveSubcategory('All')
        }
        scrollToContent()
    }

    const handleSubcategoryClick = (subcategoryName: string, e: React.MouseEvent) => {
        e.stopPropagation()
        setActiveSubcategory(subcategoryName)
        scrollToContent()
    }

    return (
        <div className="catalogue-layout">
            {/* Search Bar */}
            <div className="catalogue-top-bar">
                <div className="search-bar-container">
                    <Search className="search-icon" size={20} />
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search tools, categories, or specifications..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
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
                            <ProductCard key={`${product.category}-${product.subcategory}-${product.id}`} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
