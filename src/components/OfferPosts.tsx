import { readdirSync } from 'fs'
import { join } from 'path'
import OfferPostsCarousel from './OfferPostsCarousel'
import './offerposts.css'

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif'])

export default function OfferPosts() {
    try {
        const offerPostsPath = join(process.cwd(), 'public', 'website products', 'Offer Posts')
        const files = readdirSync(offerPostsPath)
            .filter(f => IMAGE_EXTENSIONS.has(f.substring(f.lastIndexOf('.')).toLowerCase()))
            .sort()

        const images = files.map(f => `/website%20products/Offer%20Posts/${encodeURIComponent(f)}`)

        if (images.length === 0) return null
        return <OfferPostsCarousel images={images} />
    } catch {
        // Folder doesn't exist yet
        return null
    }
}
