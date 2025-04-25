import Footer from "@/src/components/footer";
import Header from "@/src/components/header";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {

    return (
      <div className="flex flex-col">
        <Header />
        <main className="xl:mx-20 pt-4 px-6 mt-[4rem] pb-[60px] flex flex-col flex-1">
          {children}
        </main>
        <Footer />
      </div>
    );
  }