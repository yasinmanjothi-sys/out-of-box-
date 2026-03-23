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
    default: "Out of Box Tools | The Right Tool For The Right Job",
    template: "%s | Out of Box Tools | The Right Tool For The Right Job",
  },
  description:
    "Browse our extensive catalogue of professional hardware, power tools, hand tools, and safety equipment. Inquire directly via WhatsApp. Visit us at Jampark Plaza, Ngong Rd, Nairobi.",
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
