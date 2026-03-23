import { MetadataRoute } from 'next'
import { getProducts } from '@/lib/parseProducts'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://outofboxtools.com'

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/catalogue`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ]

    // Dynamic catalogue category pages
    const categories = getProducts()
    const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
        url: `${baseUrl}/catalogue?category=${encodeURIComponent(cat.name)}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    return [...staticPages, ...categoryPages]
}
