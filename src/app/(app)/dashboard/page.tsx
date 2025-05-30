"use client"
import Extrato from "@/src/components/dashboard/extrato";
import NavDashboard from "@/src/components/dashboard/nav";
import NovaTransacao from "@/src/components/dashboard/nova-transacao";
import Saldo from "@/src/components/dashboard/saldo";

export default function Dashboard() {
  return (
    <div className="flex my-4 gap-x-4 max-w-screen-lg mx-auto min-h-screen">
      <div className="w-[15%] h-full hidden lg:block">
        <NavDashboard type="desktop" className="hidden lg:block" />
      </div>
      <div className="flex flex-col items-center gap-y-4 w-full lg:w-[60%]">
        <NavDashboard type="tablet" className="hidden md:block lg:hidden" />
        <Saldo />
        <NovaTransacao />
        <Extrato className="lg:hidden" />
      </div>
      <div className="w-[25%] h-full hidden lg:block">
        <Extrato className="hidden lg:block" />
      </div>
    </div>
  );
}
