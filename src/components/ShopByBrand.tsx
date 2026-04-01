import Link from 'next/link'
import './shopbybrand.css'

const brands = [
    { name: 'Bosch', color: '#E30613' },
    { name: 'Ingco', color: '#FF6600' },
    { name: 'Total', color: '#0054A6' },
    { name: 'Makita', color: '#00A6A0' },
    { name: 'DeWalt', color: '#FFCD00' },
    { name: 'Stanley', color: '#FFD100' },
    { name: 'Yato', color: '#CC0000' },
    { name: 'Deli', color: '#0066CC' },
    { name: 'Tolsen', color: '#D4232A' },
    { name: 'Uyus', color: '#1F4E79' },
]

export default function ShopByBrand() {
    return (
        <section className="brands-ribbon-section">
            <div className="container">
                <div className="section-header-compact">
                    <h2 className="compact-title">Our Distribution Partners</h2>
                </div>

                <div className="logo-ribbon-wrapper">
                    <div className="logo-ribbon">
                        {brands.map((brand) => (
                            <Link 
                                href={`/catalogue?search=${encodeURIComponent(brand.name)}`} 
                                key={brand.name} 
                                className="brand-logo-item"
                                style={{ '--brand-color': brand.color } as React.CSSProperties}
                            >
                                <span className="brand-logo-text">{brand.name}</span>
                                <div className="brand-underline"></div>
                            </Link>
                        ))}
                        {/* Duplicate for infinite effect if needed, but let's start with a clean wrap */}
                    </div>
                </div>
                
                <div className="trusted-by-notice">
                    <p>Official Retailer for Construction, Woodworking & Industrial Hardware</p>
                </div>
            </div>
        </section>
    )
}
