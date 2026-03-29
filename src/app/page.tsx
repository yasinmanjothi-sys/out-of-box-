import Link from "next/link";
import AnimatedIntro from "@/components/AnimatedIntro";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import CurrentOffers from "@/components/CurrentOffers";
import BestSellers from "@/components/BestSellers";
import ShopByCategory from "@/components/ShopByCategory";
import NewArrivals from "@/components/NewArrivals";
import WhyChooseUs from "@/components/WhyChooseUs";
import VideoGrid from "@/components/VideoGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover professional hardware, power tools, and safety equipment at Out of Box Tools, Nairobi. Browse our full catalogue and inquire via WhatsApp.",
  verification: {
    google: "HCVA7c4je-VPmHup9cEJpVLBsIFT3wnc0ne-wG49GUU",
  },
};

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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <AnimatedIntro />
      <Hero />
      <TrustBar />
      <CurrentOffers />
      <BestSellers />
      <ShopByCategory />
      <NewArrivals />
      <WhyChooseUs />
      <VideoGrid />

      {/* Final Call to Action */}
      <section className="bg-blueprint" style={{ padding: '4rem 0', textAlign: 'center', borderTop: '5px solid var(--safety-orange)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Bebas Neue', color: 'var(--pure-white)', fontSize: '3rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Ready to find your tool?
          </h2>
          <p style={{ color: 'var(--white-smoke)', marginBottom: '2rem', fontSize: '1.25rem' }}>
            Browse our full catalogue and inquire directly via WhatsApp.
          </p>
          <Link href="/catalogue" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
            Explore Catalogue
          </Link>
        </div>
      </section>
    </>
  );
}
