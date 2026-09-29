import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Manish Vijay | Digital Marketing & SEO Executive Portfolio",
  description:
    "Official portfolio of Manish Vijay - Digital Marketing & SEO Executive from Jaipur, Rajasthan. Specialized in On-Page/Off-Page SEO, Google Business Profile (GBP), SEMrush, and GA4.",
  keywords: [
    "Manish Vijay",
    "SEO Executive",
    "Digital Marketing Executive",
    "Local SEO Jaipur",
    "Google Business Profile Optimization",
    "SEO Portfolio",
    "SEMrush Specialist",
  ],
  authors: [{ name: "Manish Vijay" }],
  openGraph: {
    title: "Manish Vijay | SEO & Digital Marketing Executive",
    description: "Results-driven Digital Marketing Executive specializing in Organic Search Growth & Local SEO.",
    url: "https://manish-vijay.vercel.app",
    siteName: "Manish Vijay Portfolio",
    images: [
      {
        url: "/avatar.jpg",
        width: 800,
        height: 800,
        alt: "Manish Vijay Portfolio Avatar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.variable} scroll-smooth dark`}>
      <body className="bg-slate-950 text-slate-100 font-sans antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
