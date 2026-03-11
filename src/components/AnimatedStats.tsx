'use client'

import { useEffect, useState, useRef } from 'react'
import { Briefcase, Wrench, Users, Award } from 'lucide-react'
import './animatedstats.css'

interface StatProps {
    end: number;
    label: string;
    suffix?: string;
    duration?: number;
    icon: React.ReactNode;
}

function Counter({ end, label, suffix = '', duration = 2000, icon }: StatProps) {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const counterRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (counterRef.current) {
            observer.observe(counterRef.current)
        }

        return () => {
            if (counterRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(counterRef.current)
            }
        }
    }, [])

    useEffect(() => {
        if (!isVisible) return

        let startTime: number | null = null
        let animationFrameId: number

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = timestamp - startTime

            // Easing function: easeOutQuart
            const easeOut = 1 - Math.pow(1 - progress / duration, 4)

            if (progress < duration) {
                setCount(Math.floor(end * easeOut))
                animationFrameId = requestAnimationFrame(animate)
            } else {
                setCount(end)
            }
        }

        animationFrameId = requestAnimationFrame(animate)

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId)
            }
        }
    }, [end, duration, isVisible])

    return (
        <div className="stat-card" ref={counterRef}>
            <div className="stat-icon-wrapper">
                {icon}
            </div>
            <div className="stat-number">
                {count.toLocaleString()}{suffix}
            </div>
            <div className="stat-label">{label}</div>
        </div>
    )
}

export default function AnimatedStats() {
    return (
        <section className="animated-stats-section faded-ruler">
            <div className="container">
                <div className="stats-grid">
                    <Counter
                        end={15}
                        label="Premium Brands"
                        suffix="+"
                        icon={<Briefcase size={32} strokeWidth={1.5} />}
                    />
                    <Counter
                        end={500}
                        label="Tools in Stock"
                        suffix="+"
                        icon={<Wrench size={32} strokeWidth={1.5} />}
                    />
                    <Counter
                        end={100}
                        label="Professionals Supplied"
                        suffix="+"
                        icon={<Users size={32} strokeWidth={1.5} />}
                    />
                    <Counter
                        end={2}
                        label="Years of Excellence"
                        icon={<Award size={32} strokeWidth={1.5} />}
                    />
                </div>
            </div>
        </section>
    )
}
