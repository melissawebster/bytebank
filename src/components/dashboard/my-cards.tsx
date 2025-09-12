import Image from "next/image";
import { OrangeButtonWhiteTxt, TransparentButtonOrangeTxt } from "../buttons";


export default function MyCards() {
  return (
    <div className="relative flex flex-col items-center w-full rounded-md bg-gray-400 p-6 min-h-[400px]">
      <div className="w-full flex flex-col">
        <div className="text-xl mb-6">My cards</div>
        <div className="flex flex-col gap-y-6">
          {/* Cartao Fisico */}
          <div>
            <div className="mb-2">Physical card</div>
            <div className="flex flex-col md:flex-row gap-2">
              <Image 
                src="/assets/cartao-fisico.png"
                alt="physical-card"
                unoptimized
                width={327}
                height={164}
              />
              <div className="flex flex-col gap-y-2 w-full items-center">
                <OrangeButtonWhiteTxt className="w-full max-w-[300px]">Settings</OrangeButtonWhiteTxt>
                <TransparentButtonOrangeTxt className="w-full max-w-[300px]">Block</TransparentButtonOrangeTxt>
                <div className="text-xs">Function: Debit/Credit</div>
              </div>
            </div>
          </div>
          {/* Cartao Digital */}
          <div>
            <div className="mb-2">Digital card</div>
            <div className="flex flex-col md:flex-row gap-2">
              <Image 
                src="/assets/cartao-digital.png"
                alt="cartao-digital"
                unoptimized
                width={327}
                height={164}
              />
              <div className="flex flex-col gap-y-2 w-full items-center">
                <OrangeButtonWhiteTxt className="w-full max-w-[300px]">Settings</OrangeButtonWhiteTxt>
                <TransparentButtonOrangeTxt className="w-full max-w-[300px]">Block</TransparentButtonOrangeTxt>
                <div className="text-xs">Function: Debit</div>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Pixels SM */}
      <Image 
        src="/assets/pixels.png"
        alt="pixels"
        unoptimized
        width={0}
        height={0}
        className="absolute top-0 left-0 w-auto h-auto z-10 rounded-t-md rotate-180 md:hidden"
      />
      <Image 
        src="/assets/pixels.png"
        alt="pixels"
        unoptimized
        width={0}
        height={0}
        className="absolute bottom-0 right-0 w-auto h-auto z-10 rounded-b-md md:hidden"
      />

      {/* Pixels MD */}
      <Image 
        src="/assets/pixels.png"
        alt="pixels"
        unoptimized
        width={0}
        height={0}
        className="absolute top-0 right-0 w-auto h-auto z-10 rounded-t-md rotate-180 hidden md:block"
      />
      <Image 
        src="/assets/pixels.png"
        alt="pixels"
        unoptimized
        width={0}
        height={0}
        className="absolute bottom-0 left-0 w-auto h-auto z-10 rounded-b-md hidden md:block"
      />
    </div>
  )
}