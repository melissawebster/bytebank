"use client"
import TransactionHistory from "@/src/components/dashboard/transaction-history";
import NavDashboard from "@/src/components/dashboard/nav";
import Balance from "@/src/components/dashboard/saldo";
import Services from "@/src/components/dashboard/services";

export default function Dashboard() {
  return (
    <div className="flex my-4 gap-x-4 max-w-screen-lg mx-auto min-h-screen">
      <div className="w-[15%] h-full hidden lg:block">
        <NavDashboard type="desktop" className="hidden lg:block" />
      </div>
      <div className="flex flex-col items-center gap-y-4 w-full lg:w-[60%]">
        <NavDashboard type="tablet" className="hidden md:block lg:hidden" />
        <Balance />
        <Services />
      </div>
      <div className="w-[25%] h-full hidden lg:block">
        <TransactionHistory className="hidden lg:block" />
      </div>
    </div>
  );
}
