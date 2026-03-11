import { ShieldCheck, Headphones, BadgeCheck, Truck } from 'lucide-react'
import './whychooseus.css'

const reasons = [
    {
        icon: BadgeCheck,
        title: 'Genuine Products Only',
        description: 'Every tool in our catalogue is sourced directly from authorized distributors. No counterfeits, no compromises.'
    },
    {
        icon: Headphones,
        title: 'Expert WhatsApp Support',
        description: 'Need advice on the right tool? Our team is one message away. Get personalized recommendations instantly.'
    },
    {
        icon: ShieldCheck,
        title: 'Manufacturer Warranty',
        description: 'All products come with full manufacturer warranty coverage. Buy with confidence knowing you are protected.'
    },
    {
        icon: Truck,
        title: 'Trade Pricing Available',
        description: 'Contractors and trade professionals get access to competitive bulk pricing. Contact us for special rates.'
    },
]

export default function WhyChooseUs() {
    return (
        <section className="whychoose-section bg-blueprint">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title" style={{ color: 'var(--pure-white)' }}>Why Choose Out of Box</h2>
                    <p className="section-subtitle" style={{ color: 'var(--steel-silver)' }}>Built on trust, powered by expertise</p>
                </div>

                <div className="whychoose-grid">
                    {reasons.map((reason) => {
                        const IconComp = reason.icon
                        return (
                            <div key={reason.title} className="whychoose-card">
                                <div className="whychoose-icon">
                                    <IconComp size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="whychoose-title">{reason.title}</h3>
                                <p className="whychoose-desc">{reason.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
