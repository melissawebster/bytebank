import { User } from "@/src/app/api/users/types";
import { blueCardStyle } from "../shared";
import { format, parseISO } from "date-fns";
import { ArrowDownToLine } from "lucide-react";

interface Props {
  data: User
}

export default function Balance({data}: Props) {
  return (
    <div className={`${blueCardStyle} relative flex flex-col items-center w-full p-6`}>
      <div className="w-full flex flex-col gap-y-6">

        <div className="flex flex-col gap-y-2">
          <div className={"text-3xl shiny-title"}>Balance</div>
          <div className="text-white text-4xl">$ {data.balance}</div>
        </div>

        <div className="flex flex-col gap-y-2">
          <div className={"text-xl shiny-title"}>Transactions</div>
          <div className="overflow-hidden rounded-md border border-gray-500">
            <div>
              {data.transactions.map((item) => (
                <div className={"text-slate-700 text-sm flex bg-blue-100 p-4 w-full items-center justify-between border-b border-slate-400 last:border-0"} key={item.id}>
                  <div className="flex gap-x-3">
                    <div><ArrowDownToLine className={`rounded-full border border-slate-400 w-[40px] h-[40px] p-2 ${item.type === 'Expense' ? 'rotate-180 bg-red-300 ' : 'bg-green-300'}`} /></div>
                    <div className="flex flex-col md:gap-x-1">
                      <div className="flex gap-x-1">
                        <div>{item.method}</div>
                        <div className="hidden md:block md:text-slate-500 md:before:content-['('] md:after:content-[')']">{format(parseISO(item.date), "dd/MM")}</div>
                      </div>
                      <div className="flex">
                        <div className="md:hidden text-slate-500 md:before:content-['('] md:after:content-[')']">{format(parseISO(item.date), "dd/MM")}</div>
                        <div className="hidden md:block text-slate-500">{item.counterpart}</div>
                      </div>
                    </div>
                  </div>
                  <div className="px-2 whitespace-nowrap text-lg">{item.type === 'Expense' ? <span>-</span> : <span>+</span>} $ {item.value.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}