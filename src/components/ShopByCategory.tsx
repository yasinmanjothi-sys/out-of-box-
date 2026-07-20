'use client'

import Link from 'next/link'
import { getProducts } from '@/lib/parseProducts'
import { Wrench, Ruler, HardHat, Hammer, Plug, Leaf, Droplets, Zap, Briefcase } from 'lucide-react'
import './shopbycategory.css'

const categoryIconMap: { [key: string]: any } = {
    'Power Tools': Zap,
    'Hand Tools': Wrench,
    'Measuring Tools': Ruler,
    'Safety Equipment (PPEs)': HardHat,
    'Accessories': Plug,
    'Tool Sets (Tool Boxes)': Hammer,
    'Gardening Equpiment and Gardening Tools': Leaf,
    'Water Pumps': Droplets,
    'Pneumatic (Air Compressor) Tools': Wrench,
    'Gasoline (Petrol) Machinery and Tools': Zap,
    'Insulated Tools': Plug,
    'Consumables': Briefcase,
}

const categoryDescriptionMap: { [key: string]: string } = {
    'Power Tools': 'Drills, grinders, saws & more',
    'Hand Tools': 'Wrenches, pliers, screwdrivers',
    'Measuring Tools': 'Levels, tapes, laser measures',
    'Safety Equipment (PPEs)': 'Helmets, goggles, gloves',
    'Accessories': 'Bits, discs, blades & attachments',
    'Tool Sets (Tool Boxes)': 'Complete sets & storage',
    'Gardening Equpiment and Gardening Tools': 'Mowers, trimmers, tillers',
    'Water Pumps': 'Gasoline & submersible pumps',
    'Pneumatic (Air Compressor) Tools': 'Air compressors & tools',
    'Gasoline (Petrol) Machinery and Tools': 'Petrol-powered equipment',
    'Insulated Tools': 'Electrician-safe tools',
    'Consumables': 'Supplies & consumable items',
}

export default function ShopByCategory() {
    const categories = getProducts()

    return (
        <section className="categories-section faded-ruler">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Shop by Category</h2>
                    <p className="section-subtitle">Find exactly what you need for your project</p>
                </div>

                <div className="categories-grid">
                    {categories.map((cat) => {
                        const IconComp = categoryIconMap[cat.name] || Plug
                        const description = categoryDescriptionMap[cat.name] || 'Browse our selection'
                        return (
                            <Link href={`/catalogue?category=${encodeURIComponent(cat.name)}`} key={cat.name} className="category-card-home">
                                <div className="category-icon-wrap">
                                    <IconComp size={36} strokeWidth={1.5} />
                                </div>
                                <h3 className="category-card-name">{cat.name}</h3>
                                <p className="category-card-desc">{description}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
