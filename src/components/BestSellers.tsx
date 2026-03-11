import Link from 'next/link'
import { getProducts } from '@/lib/parseProducts'
import './bestsellers.css'

export default function BestSellers() {
    const categories = getProducts()

    // Pick featured products — take first product with an image from varied categories
    const featured: { name: string; image: string; category: string; subcategory: string }[] = []
    const targetCategories = ['Power Tools', 'Hand Tools', 'Measuring Tools', 'Safety Equipment (PPEs)', 'Accessories', 'Tool Sets (Tool Boxes)']

    for (const targetCat of targetCategories) {
        const cat = categories.find(c => c.name === targetCat)
        if (cat) {
            for (const sub of cat.subcategories) {
                for (const prod of sub.products) {
                    if (prod.images.length > 0 && featured.length < 6) {
                        featured.push({
                            name: prod.name.replace(/^.*\s-\s/, ''),
                            image: prod.images[0].url,
                            category: prod.category,
                            subcategory: prod.subcategory
                        })
                        break
                    }
                }
                if (featured.length >= 6) break
            }
        }
    }

    return (
        <section className="bestsellers-section faded-ruler">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Best Sellers</h2>
                    <p className="section-subtitle">Our most popular tools trusted by professionals</p>
                </div>

                <div className="bestsellers-grid">
                    {featured.map((item, idx) => (
                        <Link href={`/catalogue?category=${encodeURIComponent(item.category)}&subcategory=${encodeURIComponent(item.subcategory)}`} key={idx} className="bestseller-card">
                            <div className="bestseller-img-wrap">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={item.image} alt={item.name} className="bestseller-img" loading="lazy" />
                            </div>
                            <div className="bestseller-info">
                                <span className="bestseller-category">{item.subcategory}</span>
                                <h3 className="bestseller-name">{item.name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="bestsellers-cta">
                    <Link href="/catalogue" className="btn btn-primary">View Full Catalogue</Link>
                </div>
            </div>
        </section>
    )
}
