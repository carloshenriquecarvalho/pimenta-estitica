import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landing Page Premium",
  description: "A clínica perfeita para você",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <GoogleTagManager gtmId="GTM-5LH3THT6" />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
