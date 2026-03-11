import { Package, ShieldCheck, MessageCircle, Award } from 'lucide-react'
import './trustbar.css'

const trustItems = [
    { icon: Package, value: '500+', label: 'Products Available' },
    { icon: ShieldCheck, value: '100%', label: 'Genuine Products' },
    { icon: MessageCircle, value: 'Instant', label: 'WhatsApp Support' },
    { icon: Award, value: 'Authorized', label: 'Official Dealer' },
]

export default function TrustBar() {
    return (
        <section className="trust-section faded-ruler">
            <div className="container">
                <div className="trust-grid">
                    {trustItems.map((item) => {
                        const IconComp = item.icon
                        return (
                            <div key={item.label} className="trust-item">
                                <div className="trust-icon">
                                    <IconComp size={28} strokeWidth={1.5} />
                                </div>
                                <div className="trust-text">
                                    <span className="trust-value">{item.value}</span>
                                    <span className="trust-label">{item.label}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
