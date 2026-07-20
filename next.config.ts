import type { NextConfig } from "next";

// 🛡️ Safety Check: Prevent production builds without Google Analytics
if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_GA_ID) {
  throw new Error(
    "\n\n❌ BUILD FAILED: NEXT_PUBLIC_GA_ID is missing.\n" +
    "Google Analytics is required for production builds to ensure tracking is active.\n" +
    "Please add NEXT_PUBLIC_GA_ID to your environment variables or .env.local file.\n"
  );
}

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // @ts-ignore - Next.js internal config to resolve workspace root
  turbopack: {
    root: ".",
  },
};

export default nextConfig;
