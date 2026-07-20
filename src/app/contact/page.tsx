import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Find Out of Box Tools at Jampark Plaza, Ngong Rd, Nairobi. Call or WhatsApp us for tool inquiries, pricing, and store visit details.',
}

const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Out of Box Tools & Hardware",
    description:
        "Professional hardware, tools, and equipment supplier in Nairobi. Browse our catalogue and inquire via WhatsApp.",
    url: "https://outofboxtools.com",
    telephone: "+254110264532",
    email: "info@outofboxtools.com",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Jampark Plaza, Ngong Rd",
        addressLocality: "Nairobi",
        addressCountry: "KE",
    },
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "14:00",
        },
    ],
    sameAs: [
        "https://www.instagram.com/outofboxtools/",
        "https://www.tiktok.com/@outofboxtools",
        "https://www.facebook.com/OutofBoxTools/",
    ],
};

export default function ContactPage() {
    return (
        <div className="page-wrapper" style={{ backgroundColor: 'var(--pure-white)' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
            />
            <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
                <h1 className="page-title">Contact &amp; Location</h1>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '3rem',
                    marginTop: '2rem',
                    alignItems: 'start'
                }}>
                    {/* Contact Details */}
                    <section>
                        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: '2rem', color: 'var(--industrial-blue)', marginBottom: '1.5rem' }}>
                            Get In Touch
                        </h2>
                        <div style={{ color: 'var(--graphite-grey)', fontSize: '1.125rem', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <strong>📍 Store Address:</strong><br />
                                Jampark Plaza<br />
                                Ngong Rd, Nairobi
                            </div>

                            <div>
                                <strong>📞 Phone / WhatsApp:</strong><br />
                                <a href="https://wa.me/254110264532?text=Hello%20Out%20of%20Box%20Tools" style={{ color: 'var(--safety-orange)' }}>0110 264532</a>
                            </div>

                            <div>
                                <strong>✉️ Email:</strong><br />
                                <a href="mailto:info@outofboxtools.com" style={{ color: 'var(--safety-orange)' }}>info@outofboxtools.com</a>
                            </div>

                            <div>
                                <strong>🕒 Working Hours:</strong><br />
                                Monday - Friday: 8:00 AM - 6:00 PM<br />
                                Saturday: 9:00 AM - 2:00 PM<br />
                                Sunday: Closed
                            </div>
                        </div>
                    </section>

                    {/* Map */}
                    <section>
                        <h2 style={{ fontFamily: 'Bebas Neue', fontSize: '2rem', color: 'var(--industrial-blue)', marginBottom: '1.5rem' }}>
                            Find Us
                        </h2>
                        <div style={{
                            width: '100%',
                            height: '400px',
                            backgroundColor: 'var(--white-smoke)',
                            border: '2px solid var(--steel-silver)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden'
                        }}>
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Out%20of%20Box%20Tools%20and%20Hardware,%20Jampark%20Plaza,%20Ngong%20Rd,%20Nairobi&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                title="Out of Box Tools Location – Jampark Plaza, Ngong Rd, Nairobi"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
