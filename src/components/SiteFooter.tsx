import Link from 'next/link'
import { Facebook, Instagram, Music2 } from 'lucide-react'
import './footer.css'

export default function SiteFooter() {
    return (
        <footer className="site-footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="brand-section">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/logos/outofbox-logo-cropped.svg"
                            alt="Out of Box Tools & Hardware Logo"
                            className="footer-logo"
                        />
                        <p className="footer-motto">The right tool for the right job</p>
                        <p className="footer-description">
                            Quality hardware, professional advice, and the exact tools you need
                            for any project. Browse our extensive catalogue.
                        </p>
                    </div>

                    <div className="links-section">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/catalogue">Tool Catalogue</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="contact-section">
                        <h3 className="footer-heading">Contact Us</h3>
                        <p className="footer-contact-info">
                            Visit our Contact page for location details and full contact information.
                        </p>
                        <div className="social-links-footer">
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={24} /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={24} /></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><Music2 size={24} /></a>
                        </div>
                        
                        <div className="payment-methods" style={{ marginTop: '2rem' }}>
                            <h3 className="footer-heading" style={{ fontSize: '1.125rem', color: 'var(--safety-orange)' }}>Accepted Payments</h3>
                            <p style={{ color: 'var(--white-smoke)', marginTop: '0.5rem', opacity: 0.9 }}>
                                We securely accept <strong>M-Pesa</strong> and Cash.
                            </p>
                            <p style={{ fontSize: '0.875rem', marginTop: '0.25rem', opacity: 0.7 }}>Till / Paybill available upon WhatsApp order confirmation.</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Out of Box Tools. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
