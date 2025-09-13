import Image from "next/image";

export const FullLogo = () => {
  return (
    <>
      <Image
        src={"/assets/logo-bytebank.png"}
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
