"use client";
import TransactionHistory from "@/src/components/dashboard/transaction-history";
import NavDashboard from "@/src/components/dashboard/nav";
import NewTransaction from "@/src/components/dashboard/new-transaction";
import Balance from "@/src/components/dashboard/balance";

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <div className="container border border-red-500 rounded-lg text-red-500 p-4 flex items-center justify-center text-md">
        This page is under construction
      </div>
      <div className="container flex mb-4 gap-x-4 mx-auto min-h-screen p-4 md:px-12 lg:px-16 xl:px-20">
        <div className="w-[15%] h-full hidden lg:block">
          <NavDashboard type="desktop" className="hidden lg:block" />
        </div>
        <div className="flex flex-col items-center gap-y-4 w-full lg:w-[60%]">
          <NavDashboard type="tablet" className="hidden md:block lg:hidden" />
          <Balance />
          <NewTransaction />
          <TransactionHistory className="lg:hidden" />
        </div>
        <div className="w-[25%] h-full hidden lg:block">
          <TransactionHistory className="hidden lg:block" />
        </div>
      </div>
    </div>
  );
}
