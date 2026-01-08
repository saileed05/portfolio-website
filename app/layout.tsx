import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: "Sailee Desai | Full-Stack Developer & AI Specialist",
  description: "Portfolio of Sailee Desai, a Full-Stack Developer and AI Engineer based in Mumbai specializing in Generative AI, React, and Python.",
  keywords: ["AI Developer", "Machine Learning", "Full Stack", "Chess", "Portfolio", "React", "Next.js", "Mumbai", "Generative AI"],
  authors: [{ name: "Sailee Desai" }],
  creator: "Sailee Desai",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://saileedesai.dev", // Replace with actual domain
    title: "Sailee Desai | Portfolio",
    description: "Building intelligent systems with creative depth.",
    siteName: "Sailee Desai Portfolio",
    images: [
      {
        url: "/og-image.png", // Ensure you add this image to public folder
        width: 1200,
        height: 630,
        alt: "Sailee Desai Portfolio Preview",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://saileedesai.dev",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased transition-colors duration-300`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}