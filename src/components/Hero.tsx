import Link from 'next/link'
import './hero.css'

export default function Hero() {
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
                </div>
            </div>
        </section>
    )
}
