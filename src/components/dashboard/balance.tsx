import { User } from "@/src/app/api/users/types";
import { darkCardStyle, shinyTitleStyle } from "../shared";
import { format, parseISO } from "date-fns";

interface Props {
  data: User
}

export default function Balance({data}: Props) {
  return (
    <div className={`${darkCardStyle} relative flex flex-col items-center w-full`}>
      <div className="w-full flex flex-col gap-y-3">

        <div className={`text-2xl ${shinyTitleStyle}`}>Balance</div>
        <div className="text-white text-4xl">$ {data.balance}</div>

        <div className={`text-lg ${shinyTitleStyle}`}>Recent Transactions</div>
        <div className="overflow-hidden rounded-md border border-gray-500">
          <table className="min-w-full">
            <tbody className="bg-dark">
              {data.transactions.map((item) => (
                <tr className={`text-white text-sm ${item.type === 'Expense' ? 'bg-[#1C1713]' : 'bg-[#1C221D]'}`} key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.type === 'Expense' ? <span>-</span> : <span>+</span>} $ {item.value.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.method}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{format(parseISO(item.date), "dd/MM")}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.counterpart}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}