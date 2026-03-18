'use client'

import { useEffect, useState } from 'react'

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
        <div style={{ height: '100vh', width: '100%' }}>
            {progress < 1 && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 60, // Sits above SiteHeader (z-index 50)
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 1 - Math.pow(progress, 4), // Fade out quickly at the end
                        pointerEvents: 'none',
                        overflow: 'hidden',
                        backgroundColor: '#000'
                    }}
                >
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transform: 'scale(1.1)',
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
                </div>
            )}
        </div>
    )
}
