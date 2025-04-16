"use client"
import logoWhite from "@/public/assets/logo-bytebank-white.png"
import instagram from "@/public/assets/instagram.png"
import whatsapp from "@/public/assets/whatsapp.png"
import youtube from "@/public/assets/youtube.png"
import Image from "next/image"


export default function Footer() {
  return (
    <footer
      className="inset-x-0 bottom-0 bg-black flex justify-center py-4 border-t-1 h-[460px] md:h-[180px]"
    >
      <div className="flex flex-col gap-y-6 md:flex-row text-white w-fit md:w-[90%] md:justify-between lg:w-[70%] my-4">

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
          <Image src={logoWhite} alt="logo bytebank" />
          <div className="flex gap-x-3">
            <Image 
              src={instagram} 
              alt="instagram"
              width={30}  
              height={30} 
              className="w-auto h-auto"
            />
            <Image 
              src={whatsapp} 
              alt="whatsapp"
              width={31}  
              height={30} 
              className="w-auto h-auto"
            />
            <Image 
              src={youtube} 
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
