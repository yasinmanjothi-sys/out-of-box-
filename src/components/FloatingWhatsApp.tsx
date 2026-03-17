'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { MessageCircle } from 'lucide-react'
import './floatingwhatsapp.css'

export default function FloatingWhatsApp() {
    const pathname = usePathname()
    const isHome = pathname === '/'
    // Calculate progress similar to SiteHeader
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
        <a
            href="https://wa.me/254110264532?text=Hello%20Out%20of%20Box%20Tools"
            className="floating-wa"
            aria-label="Contact us on WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                opacity: isHome ? Math.pow(introProgress, 5) : 1, // Steep curve to keep hidden during intro
                pointerEvents: isHome && introProgress < 1 ? 'none' : 'auto',
                transition: isHome ? 'none' : 'opacity 0.3s ease',
                transform: `translateY(${isHome ? (1 - introProgress) * 20 : 0}px)` // Slide up slightly
            }}
        >
            <MessageCircle size={32} />
        </a>
    )
}
