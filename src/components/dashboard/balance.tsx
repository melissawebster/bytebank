import { User } from "@/src/app/api/users/types";
import { format, parseISO } from "date-fns";
import { ArrowDownToLine } from "lucide-react";
import { DashButton } from "../buttons";

interface Props {
  data: User;
}

export default function Balance({ data }: Props) {
  return (
    <div className="landing-card-style no-hover-effect relative flex flex-col items-center w-full p-6">
      <div className="w-full flex flex-col gap-y-6">
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-2">
            <div className={"text-3xl shiny-title"}>Balance</div>
            <div className="text-white text-4xl">$ {data.balance}</div>
          </div>
          <DashButton>See more</DashButton>
        </div>

        <div className="flex flex-col gap-y-2">
          <div className={"text-xl shiny-title"}>Transactions</div>
          <div className="overflow-hidden rounded-md">
            <div>
              {data.transactions.map((item) => (
                <div
                  className={
                    "transactions-item-style text-sm flex p-4 w-full items-center justify-between border border-0.5 first:rounded-t-md last:rounded-b-md cursor-pointer"
                  }
                  key={item.id}
                >
                  <div className="flex gap-x-3">
                    <div>
                      <ArrowDownToLine
                        className={`rounded-full w-[40px] h-[40px] p-2 
                          ${
                            item.type === "Expense"
                              ? "rotate-180 bg-red-950 border border-red-300"
                              : "border bg-green-950 border-green-300"
                          }
                        `}
                        color={item.type === "Expense" ? "#FF8383" : "#64FFAC"}
                      />
                    </div>
                    <div className="flex flex-col md:gap-x-1">
                      <div className="flex gap-x-1">
                        <div>{item.method}</div>
                        <div className="hidden md:block md:text-slate-500 md:before:content-['('] md:after:content-[')']">
                          {format(parseISO(item.date), "dd/MM")}
                        </div>
                      </div>
                      <div className="flex">
                        <div className="md:hidden text-slate-500 md:before:content-['('] md:after:content-[')']">
                          {format(parseISO(item.date), "dd/MM")}
                        </div>
                        <div className="hidden md:block text-slate-500">
                          {item.counterpart}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`flex justify-center bg-slate-700 whitespace-nowrap text-md px-4 py-2 rounded-md min-w-[100px] ${
                      item.type === "Expense"
                        ? "border border-red-300"
                        : "border border-green-300"
                    }`}
                  >
                    {item.type === "Expense" ? <span>-</span> : <span>+</span>}{" "}
                    $ {item.value.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
