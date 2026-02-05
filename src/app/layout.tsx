import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Import Outfit for headings
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Rodrigo Navarro | Full Stack Developer",
  description: "Premium Portfolio of Rodrigo Navarro - Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased bg-[var(--background)] text-[var(--foreground)] selection:bg-purple-500 selection:text-white">
        <main className="min-h-screen relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
