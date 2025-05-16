"use client"
import Image from "next/image"


export default function Footer() {
  return (
    <footer className="bg-black flex justify-center py-4 border-t">

      <div className="container mx-auto flex flex-col gap-y-6 md:flex-row text-white md:justify-between my-4 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">

        <div className="flex flex-col gap-y-2">
          <div className="font-bold">Serviços</div>
          <div>Conta corrente</div>
          <div>Conta PJ</div>
          <div>Cartão de crédito</div>
        </div>

        <div className="flex flex-col gap-y-2">
          <div className="font-bold">Contato</div>
          <div>0800 004 250 08</div>
          <div>meajuda@bytebank.com.br</div>
          <div>ouvidoria@bytebank.com.br</div>
        </div>

        <div className="flex flex-col gap-y-4">
          <div className="font-bold">Desenvolvido por Alura</div>
          <Image 
            src={'/assets/logo-bytebank-white.png'}
            width={146}  
            height={33} 
            alt="logo bytebank" 
          />
          <div className="flex gap-x-3">
            <Image 
              src={"/assets/instagram.png"} 
              alt="instagram"
              width={30}  
              height={30} 
              className="w-auto h-auto"
            />
            <Image 
              src={"/assets/whatsapp.png"} 
              alt="whatsapp"
              width={31}  
              height={30} 
              className="w-auto h-auto"
            />
            <Image 
              src={"/assets/youtube.png"} 
              alt="youtube"
              width={31}  
              height={22} 
              className="w-auto h-auto"
            />
          </div>
        </div>


      </div>

    </footer>
  );
}
