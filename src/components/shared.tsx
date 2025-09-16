import Image from "next/image";

export const FullLogo = () => {
  return (
    <>
      <Image
        src={"/assets/logo-bytebank.svg"}
        alt="Bytebank Logo"
        width={90}
        height={40}
        priority
      />
      <div className="flex text-white">
        <div className="font-electrolize neon-turquoise text-3xl">Byte</div>
        <div className="font-electrolize lime-green text-3xl">Bank</div>
      </div>
    </>
  );
};

export const cardStyle =
  "rounded-lg border bg-gradient-to-r from-slate-600 to-slate-500 bg-indigo-200 bg-blend-multiply";

export const whiteTextStyle =
  "text-white leading-relaxed font-light drop-shadow-[0_0_3px_rgba(0,0,0,0.3)]";

export const shinyTitleStyle =
  "font-electrolize bg-gradient-to-r from-cyan-300 to-lime-200 text-transparent bg-clip-text drop-shadow-[2px_2px_0_rgba(0,0,0,0.2)]"