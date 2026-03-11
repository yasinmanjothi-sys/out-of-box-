import { Suspense } from 'react'
import { getProducts } from '@/lib/parseProducts'
import CatalogueClient from '@/components/CatalogueClient'

export const metadata = {
    title: 'Tool Catalogue | Out of Box Tools',
    description: 'Browse our extensive catalogue of hardware, tools, and equipment.',
}

export default function CataloguePage() {
    const categories = getProducts()

    return (
        <div className="page-wrapper">
            <div className="container py-8">
                <h1 className="page-title">Tool Catalogue</h1>
                <Suspense fallback={<div>Loading catalogue...</div>}>
                    <CatalogueClient categories={categories} />
                </Suspense>
            </div>
        </div>
    )
}
