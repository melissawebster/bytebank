"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import { BlackButtonGreenTxt } from "../components/buttons";
import { useRouter } from "next/navigation";


export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="xl:mx-20 pt-4 px-6 mt-[4rem] pb-[60px] flex flex-col flex-1">
        <div className="landing-card-style landing-card-style--static mx-auto flex flex-col items-center w-full md:w-1/2 text-sm px-4 py-6 gap-y-4 mt-[30px]">
            <div className="shiny-title text-black font-bold text-lg lg:text-3xl">
            Oops! This page doesn&#39;t exist.
            </div>
          <div className="white-text-style flex flex-col items-center gap-y-2 text-md lg:text-lg text-center">
            <p>Even after exploring the whole ByteBank&nbsp;universe.</p>
            <p>Let&#39;s head back and try again?</p>
          </div>
          <BlackButtonGreenTxt onClick={() => router.push("/")}>
            Go back home
          </BlackButtonGreenTxt>
        </div>
      </div>
      <Footer />
    </div>
  );
}
