import Link from 'next/link'
import './shopbybrand.css'

const brands = [
    { name: 'Bosch', color: '#007BC0' },
    { name: 'Ingco', color: '#E31937' },
    { name: 'Total', color: '#FF6600' },
    { name: 'Yato', color: '#CC0000' },
    { name: 'Deli', color: '#0066CC' },
    { name: 'Stanley', color: '#FFD100' },
    { name: 'DeWalt', color: '#FEBD17' },
    { name: 'Makita', color: '#00A6A0' },
    { name: 'Tolsen', color: '#D4232A' },
    { name: 'Uyus', color: '#1F4E79' },
]

export default function ShopByBrand() {
    return (
        <section className="brands-section bg-blueprint">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title" style={{ color: 'var(--pure-white)' }}>Shop by Brand</h2>
                    <p className="section-subtitle" style={{ color: 'var(--steel-silver)' }}>We stock only genuine products from trusted manufacturers</p>
                </div>

                <div className="brands-strip">
                    {brands.map((brand) => (
                        <Link href="/catalogue" key={brand.name} className="brand-pill">
                            <span className="brand-dot" style={{ backgroundColor: brand.color }}></span>
                            <span className="brand-label">{brand.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
