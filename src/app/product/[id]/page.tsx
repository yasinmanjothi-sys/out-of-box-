import { catalogue } from '@/lib/catalogue'
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, MessageCircle, ShieldCheck, Award, Info } from 'lucide-react'
import './product-page.css'

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return catalogue.map((tool) => ({
    id: tool.id,
  }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params
  const product = catalogue.find((t) => t.id === id)
  if (!product) return { title: 'Product Not Found' }

  const displayName = product.name.replace(/^.*\s-\s/, '')
  return {
    title: `${displayName} (SKU: ${product.id}) | Out of Box Tools`,
    description: product.description?.slice(0, 160) || `Buy ${displayName} in Nairobi, Kenya. Genuine professional hardware and tools at Out of Box Tools.`,
    openGraph: {
      title: displayName,
      description: product.description,
      images: product.images.map(img => img.url),
    }
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = catalogue.find((t) => t.id === id)

  if (!product) {
    notFound()
  }

  const displayName = product.name.replace(/^.*\s-\s/, '')
  const mainImage = product.images.length > 0 ? product.images[0].url : '/placeholder.jpg'

  const formatPrice = (price?: string | number) => {
    if (!price) return null;
    if (typeof price === 'string' && price.toLowerCase().includes('ksh')) return price;
    const num = typeof price === 'string' ? Number(price.replace(/,/g, '')) : price;
    if (!isNaN(num)) return `KSh ${num.toLocaleString()}`;
    return `KSh ${price}`;
  }

  const displayPrice = product.isOnOffer 
    ? formatPrice(product.offerPrice) 
    : formatPrice(product.price);
  
  const originalPriceFormatted = product.isOnOffer ? formatPrice(product.originalPrice || product.price) : null;

  const specLines = product.description
    ? product.description.split('\n').filter(line => line.trim() !== '')
    : []

  const waMessage = `Hello Out of Box Tools, I'm interested in ${displayName} (SKU: ${product.id}).\n\nCould you please confirm if it's in stock and the price is ${displayPrice || 'as quoted'}?`
  const waUrl = `https://wa.me/254110264532?text=${encodeURIComponent(waMessage)}`

  // JSON-LD
  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": displayName,
    "image": product.images.map(img => `https://outofboxtools.com${img.url}`),
    "description": product.description,
    "sku": product.id,
    "brand": {
      "@type": "Brand",
      "name": product.name.split(' ')[0] // Naive brand extraction
    },
    "offers": {
      "@type": "Offer",
      "url": `https://outofboxtools.com/product/${product.id}`,
      "priceCurrency": "KES",
      "price": product.isOnOffer ? (product.offerPrice || 0) : (Number(product.price?.replace(/,/g, '')) || 0),
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How do I order this tool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can order directly via WhatsApp by clicking the 'Order via WhatsApp' button. We will confirm stock availability and provide payment details (M-Pesa/Cash) immediately."
      }
    }, {
      "@type": "Question",
      "name": "Is this product genuine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Out of Box Tools only stocks 100% genuine products from authorized distributors like Bosch, Makita, and Ingco."
      }
    }]
  }

  return (
    <div className="product-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="container py-12">
        <Link href="/catalogue" className="back-link">
          <ArrowLeft size={18} /> Back to Catalogue
        </Link>

        <div className="product-grid-main">
          {/* Left: Image Gallery */}
          <div className="product-gallery">
            <div className="main-image-wrap">
              <img src={mainImage} alt={displayName} className="main-image" />
              {product.isOnOffer && <span className="offer-tag">Special Offer</span>}
            </div>
            {product.images.length > 1 && (
              <div className="thumbnails-grid">
                {product.images.map((img, idx) => (
                  <div key={idx} className="thumb-wrap">
                    <img src={img.url} alt={`${displayName} view ${idx + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info */}
          <div className="product-info-panel">
            <nav className="breadcrumb">
              <Link href="/catalogue">Catalogue</Link> / 
              <Link href={`/catalogue?category=${encodeURIComponent(product.category)}`}>{product.category}</Link>
            </nav>

            <h1 className="product-title-main">{displayName}</h1>
            <p className="product-sku">SKU: {product.id}</p>

            <div className="price-section-main">
              {product.isOnOffer && originalPriceFormatted && (
                <span className="original-price-main">{originalPriceFormatted}</span>
              )}
              {displayPrice ? (
                <div className="current-price-main">{displayPrice}</div>
              ) : (
                <div className="price-on-request">Price on Request</div>
              )}
            </div>

            <div className="trust-badges-inline">
              <div className="trust-badge"><ShieldCheck size={16} /> 100% Genuine</div>
              <div className="trust-badge"><Award size={16} /> Authorized Dealer</div>
            </div>

            <div className="cta-area">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary wa-order-btn">
                <MessageCircle size={20} /> Order via WhatsApp
              </a>
              <p className="cta-note">Instant stock check & delivery options via WhatsApp</p>
            </div>

            <div className="product-specs-section">
              <h2 className="specs-title">Specifications</h2>
              {specLines.length > 0 ? (
                <div className="specs-table">
                  {specLines.map((line, idx) => {
                    const [key, ...valParts] = line.split(':');
                    const val = valParts.join(':').trim();
                    if (key && val) {
                      return (
                        <div key={idx} className="spec-row">
                          <span className="spec-key">{key.trim()}</span>
                          <span className="spec-val">{val}</span>
                        </div>
                      )
                    }
                    return <div key={idx} className="spec-row-full">{line}</div>
                  })}
                </div>
              ) : (
                <p className="no-specs">Detailed specifications for this model are available upon request via WhatsApp.</p>
              )}
            </div>

            <div className="brand-notice">
              <Info size={16} />
              <p>Out of Box Tools is an authorized retailer for professional hardware. All products come with full manufacturer warranties where applicable.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
