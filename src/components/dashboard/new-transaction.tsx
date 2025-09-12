
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Input, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { useState } from "react";
import { PetroleumButtonWhiteTxt } from "../buttons";

const options = ["Currency exchange", "Loan and Financing"];

export default function NewTransaction() {

  const [selected, setSelected] = useState("");

  return (
    <div className="relative flex flex-col items-center w-full rounded-md bg-gray md:px-[10%] min-h-[400px]">
      <div className="w-full flex flex-col items-center md:items-start gap-y-6 m-8">

        <div className="text-2xl text-white">New Transaction</div>

        <div className="w-[90%] max-w-sm">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative">

              <ListboxButton className="w-full border border-green-500 bg-white rounded-md p-4 text-left flex justify-between items-center focus:outline-none focus:ring-1 focus:ring-green-500">
                <span>{selected || "Select transaction type"}</span>
                <ChevronDown className="w-5 h-5 text-green-500" />
              </ListboxButton>

              <ListboxOptions className="absolute mt-1 w-full border border-green-500 bg-white rounded-md shadow-lg z-10 focus:outline-none focus:ring-1 focus:ring-green-500">
                {options.map((option, i) => (
                  <ListboxOption
                    key={i}
                    value={option}
                    className="cursor-pointer px-4 py-2 hover:bg-green-50"
                  >
                    {option}
                  </ListboxOption>
                ))}
              </ListboxOptions>

            </div>
          </Listbox>
        </div>

        <div className="text-xl text-white">Value</div>

        <Input
          type="number"
          className='w-2/3 md:w-1/3 border border-green-500 bg-white rounded-md p-4 focus:outline-none focus:ring-1 focus:ring-green-500 no-spinner'
        />

        <PetroleumButtonWhiteTxt>
          Conclude transaction
        </PetroleumButtonWhiteTxt>

        <div className="relative w-4/5 md:w-2/5 aspect-[280/231] mx-auto mt-8 lg:hidden">
          <Image
            src="/assets/ilustracao-transacao.png"
            alt="Ilustração Transação"
            fill
            className="object-contain"
          />
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