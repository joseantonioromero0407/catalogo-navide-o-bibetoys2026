import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catálogo Navideño BibeToys 2026",
  description:
    "Explora, busca y registra productos del Catálogo Navideño BibeToys 2026, respaldado por INTRAPROD.",
  keywords: [
    "BibeToys",
    "catálogo de juguetes",
    "importación grupal",
    "juguetes por caja",
    "Navidad 2026",
    "Bolivia",
  ],
  openGraph: {
    title: "Catálogo Navideño BibeToys 2026",
    description: "Catálogo interactivo de importación grupal, respaldado por INTRAPROD.",
    type: "website",
    locale: "es_BO",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
