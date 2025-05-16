"use client"
import NovaTransacao from "@/src/components/dashboard/nova-transacao";
import Saldo from "@/src/components/dashboard/saldo";

export default function Dashboard() {
  return (
    <div className="flex flex-col my-4 gap-y-4 items-center max-w-screen-xl mx-auto">
      <Saldo />
      <NovaTransacao />
    </div>
  );
}
