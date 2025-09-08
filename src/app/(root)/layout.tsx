import Footer from "@/src/components/footer";
import Header from "@/src/components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[linear-gradient(to_bottom,#554683,#6EEFFD)]">
      <Header />
      <main className="mx-auto mt-[5rem] min-h-[calc(100vh-60px-4rem)]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
