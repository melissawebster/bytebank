import Footer from "@/src/components/footer";
import Header from "@/src/components/header";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {

    return (
      <>
        <Header />
            <main
            className="bg-transparent xl:mx-20 py-4 px-6 mt-[4rem] pb-[30px] min-h-screen flex flex-col"
            style={{
              minHeight: `calc(100vh - 20px - ${
              typeof window !== "undefined" && window.innerWidth < 768 ? "460px" : "180px"
              })`,
              display: "flex",
              flexDirection: "column",
            }}
            >
            {children}
            </main>
        <Footer />
      </>
    );
  }