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

export const modalWrapClass = 
  "fixed inset-0 flex justify-center pt-[75px] z-50 overflow-y-auto"

export const modalClass =
  "absolute w-[95%] max-w-xl transform rounded-xl space-y-6 bg-dark mx-4 px-8 md:px-14 pt-14 pb-10 text-left align-middle shadow-xl transition-all"

export const navDashboardItems = [
  { name: "Dashboard", url: "/dashboard" },
  { name: "Checking", url: "/dashboard" },
  { name: "Cards", url: "/dashboard" },
  { name: "Payments", url: "/dashboard" },
  { name: "Points program", url: "/dashboard" },
];