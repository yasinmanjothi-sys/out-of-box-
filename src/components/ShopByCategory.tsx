import Link from 'next/link'
import { Wrench, Ruler, HardHat, Hammer, Drill, Plug, Leaf, Droplets } from 'lucide-react'
import './shopbycategory.css'

const categoryCards = [
    { name: 'Power Tools', icon: Drill, description: 'Drills, grinders, saws & more' },
    { name: 'Hand Tools', icon: Wrench, description: 'Wrenches, pliers, screwdrivers' },
    { name: 'Measuring Tools', icon: Ruler, description: 'Levels, tapes, laser measures' },
    { name: 'Safety Equipment (PPEs)', icon: HardHat, description: 'Helmets, goggles, gloves' },
    { name: 'Accessories', icon: Plug, description: 'Bits, discs, blades & attachments' },
    { name: 'Tool Sets (Tool Boxes)', icon: Hammer, description: 'Complete sets & storage' },
    { name: 'Gardening Equpiment and Gardening Tools', icon: Leaf, description: 'Mowers, trimmers, tillers' },
    { name: 'Water Pumps', icon: Droplets, description: 'Gasoline & submersible pumps' },
]

export default function ShopByCategory() {
    return (
        <section className="categories-section faded-ruler">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Shop by Category</h2>
                    <p className="section-subtitle">Find exactly what you need for your project</p>
                </div>

                <div className="categories-grid">
                    {categoryCards.map((cat) => {
                        const IconComp = cat.icon
                        return (
                            <Link href={`/catalogue?category=${encodeURIComponent(cat.name)}`} key={cat.name} className="category-card-home">
                                <div className="category-icon-wrap">
                                    <IconComp size={36} strokeWidth={1.5} />
                                </div>
                                <h3 className="category-card-name">{cat.name}</h3>
                                <p className="category-card-desc">{cat.description}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
