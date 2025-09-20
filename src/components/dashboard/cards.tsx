import { darkCardStyle } from "../shared";
import Image from "next/image";

export default function Cards() {
  return (
    <div className={`${darkCardStyle} relative flex flex-col items-center w-full`}>
      <div className="w-full flex flex-col gap-y-3">
        <div className="text-2xl shiny-title">Cards</div>
        <div className="">
          <Image
            src="/assets/card-holder.svg"
            alt="card"
            width={283}
            height={182}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
