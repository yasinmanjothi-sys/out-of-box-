import AnimatedStats from '@/components/AnimatedStats'

export const metadata = {
    title: 'About Us | Out of Box Tools',
    description: 'Learn more about Out of Box Tools and our commitment to quality hardware.',
}

export default function AboutPage() {
    return (
        <div className="page-wrapper" style={{ backgroundColor: 'var(--pure-white)', overflow: 'hidden' }}>
            <div className="container" style={{ paddingTop: '4rem', paddingBottom: '2rem', position: 'relative' }}>
                <h1 className="page-title" style={{ position: 'relative', zIndex: 2 }}>About Out of Box Tools</h1>

                <div style={{ maxWidth: '800px', margin: '2rem 0', color: 'var(--graphite-grey)', fontSize: '1.125rem', lineHeight: '1.8', position: 'relative', zIndex: 2 }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        At <strong>Out of Box Tools</strong>, we believe that the foundation of every successful project relies on the quality of the equipment used. Founded on the principle of providing unparalleled reliability, we supply trade professionals, contractors, and DIY enthusiasts with the finest hardware available.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        We understand that precision and durability are not just preferences—they are requirements. That is why our catalogue is carefully curated to feature only tools that meet the highest industrial standards.
                    </p>
                    <h2 style={{ fontFamily: 'Bebas Neue', fontSize: '2rem', color: 'var(--industrial-blue)', marginTop: '3rem', marginBottom: '1rem' }}>
                        Our Mission
                    </h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Our mission is simple: To provide <strong style={{ color: 'var(--safety-orange)' }}>THE RIGHT TOOL FOR THE RIGHT JOB</strong>, every single time.
                    </p>
                    <p>
                        We don't just sell equipment; we provide solutions. Whether you're breaking ground on a major construction site or refining the details of a woodworking project, Out of Box Tools ensures you have the power, precision, and performance you need to succeed.
                    </p>
                </div>

                {/* Decorative Background Logo */}
                <div style={{
                    position: 'absolute',
                    top: '5%',
                    right: 0,
                    width: '60%',
                    maxWidth: '600px',
                    height: '80%',
                    opacity: 0.04,
                    pointerEvents: 'none',
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end'
                }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/toolbox-bg.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'right center' }} />
                </div>
            </div>

            <AnimatedStats />

            <div className="container" style={{ paddingBottom: '4rem' }}>
                {/* Space for future sections if needed */}
            </div>
        </div>
    )
}
