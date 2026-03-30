'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import './hero.css' // Import styles for the scroll hint

export default function AnimatedIntro() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const vh = window.innerHeight
            const scrolled = window.scrollY
            setProgress(Math.min(scrolled / vh, 1))
        }
        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div style={{ height: '100dvh', width: '100%' }}>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '100dvh', // Explicit dynamic height for mobile
                    zIndex: 60, // Sits above SiteHeader (z-index 50)
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 1 - Math.pow(progress, 4), // Fade out quickly at the end
                    pointerEvents: 'none',
                    overflow: 'hidden',
                    backgroundImage: 'url(/hero-poster.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    poster="/hero-poster.png"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: 'scale(1.1)', // Matches original
                        zIndex: 1,
                    }}
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>

                <div style={{
                    // Starts centered (scale 1).
                    // Shrinks and translates towards top-left (header logo position)
                    // This uses an approximation that feels natural to the user.
                    transform: `translate(${progress * -35}vw, ${progress * -42}vh) scale(${1 - progress * 0.82})`,
                    transformOrigin: 'center center',
                    zIndex: 10,
                }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/logos/header-logo-cropped.svg"
                        alt="Out of Box Tools"
                        style={{
                            width: '500px',
                            maxWidth: '80vw',
                            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' // Extra pop on intro
                        }}
                    />
                </div>

                {/* Scroll Indicator - Fixed to absolute bottom of screen */}
                <div className="hero-scroll-hint" style={{ 
                    position: 'fixed',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    opacity: 1 - progress * 2,
                    zIndex: 101, // Above the intro overlay
                    pointerEvents: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px'
                }}>
                    <span className="scroll-text" style={{ 
                        fontSize: '1.4rem', 
                        fontWeight: 700,
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                    }}>Scroll to Explore</span>
                    <div className="scroll-arrow" style={{ 
                        width: '60px', 
                        height: '60px',
                        backgroundColor: 'var(--safety-orange)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
                    }}>
                        <ChevronDown size={36} strokeWidth={3} color="white" />
                    </div>
                </div>
            </div>
        </div>
    )
}
