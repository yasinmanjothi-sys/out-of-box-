export const metadata = {
    title: 'Contact Us | Out of Box Tools',
    description: 'Get in touch with Out of Box Tools or find our store location.',
}

export default function ContactPage() {
    return (
        <div className="page-wrapper" style={{ backgroundColor: 'var(--pure-white)' }}>
            <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
                <h1 className="page-title">Contact & Location</h1>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem',
                    marginTop: '2rem'
                }}>
                    {/* Contact Details */}
                    <div>
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
                                <a href="whatsapp://send?phone=254110264532&text=Hello%20Out%20of%20Box%20Tools" style={{ color: 'var(--safety-orange)' }}>0110 264532</a>
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
                    </div>

                    {/* Map Placeholder */}
                    <div>
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
                                title="Out of Box Tools Location"
                                style={{ border: 0 }}
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
