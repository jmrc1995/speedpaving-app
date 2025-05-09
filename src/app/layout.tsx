import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speed Paving | Elizabeth, NJ Asphalt & Concrete Services",
  description:
    "Speed Paving in Elizabeth, NJ has delivered high-quality commercial and residential asphalt, concrete, seal coating, and paving solutions since 1987.",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  keywords: [
    "Speed Paving",
    "Elizabeth NJ paving",
    "asphalt contractor",
    "paving services",
    "concrete installation",
    "driveway paving",
    "seal coating",
    "paving company near me",
    "residential paving NJ",
    "commercial paving NJ",
  ],
  authors: [{ name: "Speed Paving" }],
  openGraph: {
    title: "Speed Paving | Professional Paving Services in Elizabeth, NJ",
    description:
      "Asphalt, concrete, and seal coating services done right. Trusted in NJ since 1987.",
    url: "https://www.speedpaving.com",
    siteName: "Speed Paving",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Speed Paving | Elizabeth, NJ",
    description:
      "High-quality paving and concrete solutions for residential and commercial properties in NJ.",
    site: "@speedpaving", 
  },
  icons: {
    icon: "/favicon.ico", 
    shortcut: "/favicon.ico",
    apple: "/favicon.ico", 
  },
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
