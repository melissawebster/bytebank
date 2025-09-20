import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
import type { Metadata } from "next";


export const metadata: Metadata = {
  metadataBase: new URL("https://bytebank-five.vercel.app/"),
  title: "ByteBank - Experience Greater Financial Freedom",
  description:
    "ByteBank is more than a bank — it’s your partner in financial freedom. Open an account today and enjoy tools that fit your lifestyle.",
  keywords: [
    "banking",
    "finance",
    "checking account",
    "credit card",
    "financial freedom",
  ],
  openGraph: {
    title: "ByteBank - Experience Greater Financial Freedom",
    description:
      "ByteBank is more than a bank — it’s your partner in financial freedom.",
    url: "https://bytebank-five.vercel.app/",
    siteName: "ByteBank",
    images: [
      {
        url: "/assets/bytebank-og.png", 
        width: 1200,
        height: 630,
        alt: "ByteBank promotional card",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 mx-auto mt-[5rem]">{children}</main>
      <Footer />
    </div>
  );
}
