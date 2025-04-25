import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Bytebank",
  description: "Liberdade no controle da sua vida financeira",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
        lang="pt-BR"
        className="min-h-full bg-[linear-gradient(to_bottom,#004D61_0%,#FFF_100%)]"
      >
        <body className="bg-transparent antialiased">
          {children}
        </body>
      </html>
  );
}
