import Image from "next/image";


export default function Servicos() {
  const iconStyle = 'flex flex-col items-center justify-center w-[200px] bg-white rounded-md p-2'
  return (
    <div className="relative flex flex-col items-center w-full rounded-md bg-gray-400 md:px-[10%] min-h-[400px]">
      <div className="w-full flex flex-col m-8 md:justify-between items-center">
        <div className="space-y-4 mb-6">
          <div className="text-xl">Confira os serviços disponíveis</div>
        </div>
        <div className="w-full flex flex-wrap items-center justify-center gap-3">
          <div className={iconStyle}>
            <Image 
              src="/assets/icone-emprestimo.png"
              alt="emprestimo"
              unoptimized
              width={60}
              height={60}
              className=" m-8"
            />
            <div className="font-semibold">Empréstimo</div>
          </div>
          <div className={iconStyle}>
            <Image 
              src="/assets/icone-cartoes.png"
              alt="cartoes"
              unoptimized
              width={60}
              height={60}
              className=" m-8"
            />
            <div className="font-semibold">Meus cartões</div>
          </div>
          <div className={iconStyle}>
            <Image 
              src="/assets/icone-doacoes.png"
              alt="doacoes"
              unoptimized
              width={60}
              height={60}
              className=" m-8"
            />
            <div className="font-semibold">Doações</div>
          </div>
          <div className={iconStyle}>
            <Image 
              src="/assets/icone-pix.png"
              alt="doacoes"
              unoptimized
              width={60}
              height={60}
              className=" m-8"
            />
            <div className="font-semibold">Pix</div>
          </div>
          <div className={iconStyle}>
            <Image 
              src="/assets/icone-seguros.png"
              alt="seguros"
              unoptimized
              width={60}
              height={60}
              className=" m-8"
            />
            <div className="font-semibold">Seguros</div>
          </div>
          <div className={iconStyle}>
            <Image 
              src="/assets/icone-credito.png"
              alt="credito"
              unoptimized
              width={60}
              height={60}
              className=" m-8"
            />
            <div className="font-semibold">Crédito Celular</div>
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