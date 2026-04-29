import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Open Source Foundation — Fund the future of open source software",
  description:
    "Open Source Foundation connects supporters with the open-source projects the world depends on. Fund maintainers, discover great software, and help keep open source thriving.",
  metadataBase: new URL("https://opensourcefoundation.org"),
  openGraph: {
    title: "Open Source Foundation",
    description: "Fund the future of open source software",
    url: "https://opensourcefoundation.org",
    siteName: "Open Source Foundation",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Source Foundation",
    description: "Fund the future of open source software",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
