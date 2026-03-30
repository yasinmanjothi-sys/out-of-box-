'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Search, ChevronDown } from 'lucide-react'
import './hero.css'

export default function Hero() {
    const [query, setQuery] = useState('')
    const router = useRouter()

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (query.trim()) {
            router.push(`/catalogue?search=${encodeURIComponent(query.trim())}`)
        }
    }

    return (
        <section className="hero-section bg-blueprint">
            <div className="container hero-content">
                <div className="hero-text-box">
                    <h1 className="hero-title">The right tool for the right job</h1>
                    <p className="hero-subtitle">
                        Engineered for precision. Built for reliability.
                        Discover our comprehensive catalogue of professional hardware and equipment.
                    </p>
                    
                    <div className="hero-actions">
                        <Link href="/catalogue" className="btn btn-primary">
                            Browse Catalogue
                        </Link>
                        <Link href="/contact" className="btn btn-outline">
                            Find Our Store
                        </Link>
                    </div>

                    {/* Hero Search Bar */}
                    <form className="hero-search-container" onSubmit={handleSearch}>
                        <div className="hero-search-input-wrapper">
                            <Search className="hero-search-icon" size={20} />
                            <input 
                                type="text" 
                                className="hero-search-input" 
                                placeholder="What product are you looking for?" 
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="hero-search-btn">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
