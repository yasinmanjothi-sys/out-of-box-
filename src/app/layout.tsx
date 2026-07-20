import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { getProducts } from "@/lib/parseProducts";
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  metadataBase: new URL("https://outofboxtools.com"),
  title: {
    default: "Out of Box Tools & Hardware | Nairobi",
    template: "%s | Out of Box Tools & Hardware | Nairobi",
  },
  description:
    "Discover professional hardware, power tools, and safety equipment at Out of Box Tools, Nairobi. Browse our full catalogue and enquire via WhatsApp.",
};

export const viewport: Viewport = {
  themeColor: "#1F4E79",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = getProducts();
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteHeader categories={categories} />
        <main>{children}</main>
        <SiteFooter />
        <FloatingWhatsApp />
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
