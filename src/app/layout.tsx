import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bytebank",
  description: "Financial freedom in your hands",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="min-h-full">
      <body className="bg-[linear-gradient(to_bottom,#554683,#37A7CC)] antialiased">{children}</body>
    </html>
  );
}
