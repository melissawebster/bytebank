"use client"
import Conta from "@/src/components/dashboard/minha-conta";
import NavDashboard from "@/src/components/dashboard/nav";


export default function MinhaConta() {
  return (
    <div className="flex my-4 gap-x-4 max-w-screen-lg mx-auto min-h-screen">
      <div className="w-[15%] h-full hidden lg:block">
        <NavDashboard type="desktop" className="hidden lg:block" />
      </div>
      <div className="flex flex-col items-center gap-y-4 w-full lg:w-[85%]">
        <NavDashboard type="tablet" className="hidden md:block lg:hidden" />
        <Conta />
      </div>
    </div>
  );
}
