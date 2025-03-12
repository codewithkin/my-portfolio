import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Kin Leon Zinzombe | Full-Stack Developer & AI Enthusiast",
  description:
    "Kin Leon Zinzombe is a passionate full-stack developer specializing in web and mobile app development, AI, and backend systems. Let's build something amazing together!",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js",
    "JavaScript",
    "Python",
    "Mobile App Development",
    "AI Development",
    "Freelance Developer",
    "Web Development",
  ],
  authors: [{ name: "Kin Leon Zinzombe", url: "https://yourdomain.com" }],
  creator: "Kin Leon Zinzombe",
  openGraph: {
    title: "Kin Leon Zinzombe | Full-Stack Developer & AI Enthusiast",
    description:
      "Building web, mobile, and AI-powered apps that make a difference. Check out my work!",
    url: "https://yourdomain.com",
    siteName: "Kin Leon Zinzombe",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Kin Leon Zinzombe Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kin Leon Zinzombe | Full-Stack Developer & AI Enthusiast",
    description:
      "Passionate about building web, mobile, and AI-powered apps. Check out my portfolio!",
    site: "@yourtwitterhandle", // Replace with your Twitter handle
    creator: "@yourtwitterhandle",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
  robots: "index, follow",
  metadataBase: new URL("https://yourdomain.com"),
};

const satoshi = localFont({ 
  src: "./fonts/Satoshi/fonts/TTF/Satoshi-Variable.ttf"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.className} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
