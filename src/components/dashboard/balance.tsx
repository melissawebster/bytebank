import { darkCardStyle, shinyTitleStyle } from "../shared";


export default function Balance() {
  return (
    <div className={`${darkCardStyle} relative flex flex-col items-center w-full min-h-[400px]`}>
      <div className="w-full flex flex-col gap-y-6">
        <div className={`text-2xl ${shinyTitleStyle}`}>Balance</div>
      </div>
    </div>
  );
}