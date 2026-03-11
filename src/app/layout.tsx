import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { getProducts } from "@/lib/parseProducts";

export const metadata: Metadata = {
  title: "Out of Box Tools | The right tool for the right job",
  description: "Browse our extensive catalogue of hardware, tools, and equipment.",
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
      </body>
    </html>
  );
}
