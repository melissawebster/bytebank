"use client"
import Extrato from "@/src/components/dashboard/extrato";
import NavH from "@/src/components/dashboard/navh";
import NovaTransacao from "@/src/components/dashboard/nova-transacao";
import Saldo from "@/src/components/dashboard/saldo";

export default function Dashboard() {

  return (
    <div className="flex my-4 gap-x-4 max-w-screen-xl mx-auto">
      <div className="bg-green-600 w-1/5">
        dsfdsf
      </div>
      <div className="flex flex-col items-center gap-y-4 w-3/5">
        <NavH />
        <Saldo />
        <NovaTransacao />
        <Extrato />
      </div>
      <div className="bg-blue-600 w-1/5">
        dsfdsf
      </div>
    </div>
  );
}
