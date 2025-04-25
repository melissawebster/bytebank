'use client';
import Image from "next/image"
import Header from '../components/header';
import Footer from '../components/footer';
import { OrangeButtonWhiteTxt } from '../components/buttons';
import ilustracaoNotFound from "@/public/assets/ilustracao-404.svg"


export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
        <div className="xl:mx-20 pt-4 px-6 mt-[4rem] pb-[60px] flex flex-col flex-1">
          <div className='flex flex-col items-center gap-y-4 mt-[30px]'>
            <div className="text-black font-bold text-lg">Ops! Não encontramos a página... </div>
            <div className="flex flex-col items-center text-md text-center">
              <p>
                E olha que exploramos o universo procurando por ela! 
              </p>
              <p>
                Que tal voltar e tentar novamente?
              </p>
            </div>
            <OrangeButtonWhiteTxt>Voltar ao início</OrangeButtonWhiteTxt>
            <Image 
              src={ilustracaoNotFound} 
              alt="Not Found"
              className="w-auto h-auto mt-4"
            />
          </div>
        </div>
      <Footer />
    </div>

  );
}
