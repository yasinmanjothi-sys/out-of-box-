import AnimatedIntro from "@/components/AnimatedIntro";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import BestSellers from "@/components/BestSellers";
import ShopByCategory from "@/components/ShopByCategory";
import NewArrivals from "@/components/NewArrivals";
import WhyChooseUs from "@/components/WhyChooseUs";
import VideoGrid from "@/components/VideoGrid";

export default function Home() {
  return (
    <>
      <AnimatedIntro />
      <Hero />
      <TrustBar />
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
          <a href="/catalogue" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
            Explore Catalogue
          </a>
        </div>
      </section>
    </>
  );
}

