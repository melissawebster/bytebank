import Footer from "@/src/components/footer";
import Header from "@/src/components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[linear-gradient(to_bottom,#554683,#37A7CC)]">
      <Header />
      <main className="flex-1 mx-auto mt-[5rem]">{children}</main>
      <Footer />
    </div>
  );
}
