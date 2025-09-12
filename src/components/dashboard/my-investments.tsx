import Image from "next/image";


export default function Investments() {
  return (
    <div className="relative flex flex-col items-center w-full rounded-md bg-gray-400 p-6 min-h-[400px]">
      <div className="w-full flex flex-col items-center md:items-start">

        <div className="text-xl font-semibold mb-6">Investments</div>

        <div className="flex flex-col w-full items-center md:items-start gap-y-6">
          <div className="text-xl">Total: R$ 50.000.00</div>

          <div className="w-full flex flex-col md:flex-row gap-2">
            <div className="flex flex-col items-center bg-petroleum rounded-md p-4 w-full md:w-1/2 text-white">
              <div className="mb-2">Fixed income</div>
              <div className="mb-2">R$ 36,000.00</div>
            </div>

            <div className="flex flex-col items-center bg-petroleum rounded-md p-4 w-full md:w-1/2 text-white">
              <div className="mb-2">Variable income</div>
              <div className="mb-2">R$ 14,000.00</div>
            </div>
          </div>

          <div className="text-xl">Statistics</div>
 
          <div className="flex flex-col md:flex-row items-center gap-x-8 justify-center bg-petroleum w-full rounded-md p-4 text-white">
            <Image 
              src="/assets/grafico-pizza.png"
              alt="graphic-pizza"
              unoptimized
              width={127}
              height={127}
            />
            <div className="flex flex-col gap-y-2 mt-4">
              <div className="flex items-center gap-x-2">
                <div className="bg-[#2567f9] rounded-full h-[10px] w-[10px]"></div>
                <div>Investment funds</div>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="bg-[#ff3c82] rounded-full h-[10px] w-[10px]"></div>
                <div>Private retirement</div>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="bg-[#f1823d] rounded-full h-[10px] w-[10px]"></div>
                <div>Stock Market</div>
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