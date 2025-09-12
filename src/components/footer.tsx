"use client"
import Image from "next/image"


export default function Footer() {
  return (
    <footer className="bg-dark-transp flex justify-center py-4 border-t-3">

      <div className="container mx-auto flex flex-col gap-y-6 md:flex-row text-white md:justify-between my-4 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">

        <div className="flex flex-col gap-y-2">
          <div className="font-bold lime-green">Services</div>
          <div>Checking account</div>
          <div>Salary account</div>
          <div>Credit card</div>
        </div>

        <div className="flex flex-col gap-y-2">
          <div className="font-bold lime-green">Contact</div>
          <div>0800 004 250 08</div>
          <div>help@bytebank.com</div>
        </div>

        <div className="flex flex-col gap-y-4">
          <div className="font-bold lime-green">Project for FIAP</div>
          <Image 
            src={'/assets/logo-bytebank-white.svg'}
            width={176}  
            height={37} 
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
