"use client"
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Youtube, Linkedin, Mail, Menu, X, ChevronDown } from 'lucide-react'
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
          <a href="https://www.facebook.com/OutofBoxTools/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
          <a href="https://www.instagram.com/outofboxtools/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
          <a href="https://www.tiktok.com/@outofboxtools" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/></svg>
          </a>
          <a href="https://www.youtube.com/@OutOfBoxTools" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={20} /></a>
          <a href="https://ke.linkedin.com/company/out-of-box-hardware-limited" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href="mailto:info@outofboxtools.com" aria-label="Email"><Mail size={20} /></a>
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
            <a href="https://www.facebook.com/OutofBoxTools/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={24} /></a>
            <a href="https://www.instagram.com/outofboxtools/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={24} /></a>
            <a href="https://www.tiktok.com/@outofboxtools" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/></svg>
            </a>
            <a href="https://www.youtube.com/@OutOfBoxTools" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={24} /></a>
            <a href="https://ke.linkedin.com/company/out-of-box-hardware-limited" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={24} /></a>
            <a href="mailto:info@outofboxtools.com" aria-label="Email"><Mail size={24} /></a>
          </div>
        </div>
      )}
    </header>
  )
}
