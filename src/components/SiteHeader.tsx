"use client"
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Music2, Menu, X, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { CategoryData } from '@/lib/parseProducts'
import './header.css'

export default function SiteHeader({ categories = [] }: { categories?: CategoryData[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false)
  const [isMobileCatalogueOpen, setIsMobileCatalogueOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [introProgress, setIntroProgress] = useState(isHome ? 0 : 1)

  useEffect(() => {
    if (!isHome) {
      setIntroProgress(1)
      return
    }

    const handleScroll = () => {
      const vh = window.innerHeight
      const scrolled = window.scrollY
      setIntroProgress(Math.min(scrolled / vh, 1))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  return (
    <header
      className="site-header"
      style={{
        opacity: isHome ? Math.pow(introProgress, 5) : 1, // Steep curve to keep it hidden until the very end
        pointerEvents: isHome && introProgress < 1 ? 'none' : 'auto',
        transition: isHome ? 'none' : 'opacity 0.3s ease'
      }}
    >
      <div className="container header-container">
        <Link href="/" className="logo-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/header-logo-cropped.svg"
            alt="Out of Box Tools & Hardware Logo"
            className="logo-img header-logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link href="/" className="nav-link">Home</Link>
          <div
            className="nav-dropdown-container"
            onMouseEnter={() => setIsCatalogueOpen(true)}
            onMouseLeave={() => setIsCatalogueOpen(false)}
          >
            <Link href="/catalogue" className="nav-link flex-align-center">
              Tool Catalogue <ChevronDown size={16} className={`dropdown-icon ${isCatalogueOpen ? 'rotate-180' : ''}`} />
            </Link>
            {isCatalogueOpen && (
              <div className="nav-dropdown">
                <Link href="/catalogue" className="dropdown-link view-all">View All Tools</Link>
                {categories.map(cat => (
                  <Link
                    key={cat.name}
                    href={`/catalogue?category=${encodeURIComponent(cat.name)}`}
                    className="dropdown-link"
                    onClick={() => setIsCatalogueOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" className="nav-link">About Us</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Social Links */}
        <div className="social-links desktop-only">
          <a href="#" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><Music2 size={20} /></a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav">
          <Link href="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>

          <div className="mobile-nav-item">
            <div className="mobile-nav-link-wrapper">
              <Link href="/catalogue" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Tool Catalogue</Link>
              <button
                className="mobile-dropdown-toggle"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileCatalogueOpen(!isMobileCatalogueOpen);
                }}
              >
                <ChevronDown size={24} className={`dropdown-icon ${isMobileCatalogueOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {isMobileCatalogueOpen && (
              <div className="mobile-dropdown">
                <Link href="/catalogue" className="mobile-dropdown-link view-all" onClick={() => setIsMenuOpen(false)}>
                  View All Tools
                </Link>
                {categories.map(cat => (
                  <Link
                    key={cat.name}
                    href={`/catalogue?category=${encodeURIComponent(cat.name)}`}
                    className="mobile-dropdown-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link href="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>

          <div className="mobile-social-links">
            <a href="#" target="_blank" rel="noopener noreferrer"><Facebook size={24} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><Music2 size={24} /></a>
          </div>
        </div>
      )}
    </header>
  )
}
