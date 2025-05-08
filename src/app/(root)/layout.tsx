import Footer from "@/src/components/footer";
import Header from "@/src/components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[linear-gradient(to_bottom,#004D61_0%,#FFF_100%)]">
      <Header />
      <main className="container mx-auto mt-[5rem] min-h-[calc(100vh-60px-4rem)] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
