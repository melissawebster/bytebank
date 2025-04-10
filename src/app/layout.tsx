import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", 
});

export const metadata: Metadata = {
  title: "Bytebank",
  description: "Liberdade no controle da sua vida financeira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} antialiased min-h-screen bg-[linear-gradient(to_bottom,#004D61_0%,#FFF_100%)]`}
      >
        {children}
      </body>
    </html>
  );
}
