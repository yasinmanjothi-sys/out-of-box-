import { readdirSync } from 'fs'
import { join } from 'path'
import BrandLogosGrid from './BrandLogosGrid'
import './brandlogos.css'

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg'])

export default function BrandLogos() {
    try {
        const brandLogosPath = join(process.cwd(), 'public', 'brand-logos')
        const files = readdirSync(brandLogosPath)
            .filter(f => IMAGE_EXTENSIONS.has(f.substring(f.lastIndexOf('.')).toLowerCase()))
            .sort()

        const logos = files.map(f => `/brand-logos/${encodeURIComponent(f)}`)

        if (logos.length === 0) return null
        return <BrandLogosGrid logos={logos} />
    } catch {
        // Folder doesn't exist yet
        return null
    }
}
