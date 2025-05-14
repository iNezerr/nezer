import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-space-mono'
});

export const metadata: Metadata = {
  title: "Stephen Adeniji | Frontend Developer",
  description: "Stephen Adeniji's portfolio website - Frontend Developer transforming ideas into seamless, beautiful experiences one pixel at a time.",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable}`}>
      <body className={`${inter.className} bg-[#111111] text-white`}>{children}</body>
    </html>
  );
}
