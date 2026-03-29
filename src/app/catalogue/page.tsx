import { Suspense } from 'react'
import { getStaticProducts } from '@/lib/parseProducts'
import CatalogueClient from '@/components/CatalogueClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Tool Catalogue',
    description: 'Browse our full catalogue of power tools, hand tools, safety equipment, and accessories. Filter by category and inquire via WhatsApp.',
}

export default function CataloguePage() {
    const categories = getStaticProducts()

    const itemListJsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Out of Box Tools – Product Catalogue",
        description: "Browse our complete catalogue of professional hardware, tools, and equipment.",
        url: "https://outofboxtools.com/catalogue",
        numberOfItems: categories.length,
        itemListElement: categories.map((cat, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: cat.name,
            url: `https://outofboxtools.com/catalogue?category=${encodeURIComponent(cat.name)}`,
        })),
    }

    return (
        <div className="page-wrapper">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
            />
            <div className="container py-8">
                <h1 className="page-title">Tool Catalogue</h1>
                <Suspense fallback={<div>Loading catalogue...</div>}>
                    <CatalogueClient categories={categories} />
                </Suspense>
            </div>
        </div>
    )
}
