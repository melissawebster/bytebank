"use client";
import TransactionHistory from "@/src/components/dashboard/points-program";
import NavDashboard from "@/src/components/dashboard/nav";
import Balance from "@/src/components/dashboard/balance";
import Cards from "@/src/components/dashboard/cards";

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <div className="container flex mb-4 gap-x-4 mx-auto min-h-screen p-4 md:px-12 lg:px-16 xl:px-20">
        <div className="w-[20%] h-full hidden lg:block">
          <NavDashboard className="hidden lg:block" />
        </div>
        <div className="flex flex-col items-center gap-y-4 w-full lg:w-[80%]">
          <NavDashboard className="hidden md:block lg:hidden" />
          <Balance />
          <Cards />
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
}
