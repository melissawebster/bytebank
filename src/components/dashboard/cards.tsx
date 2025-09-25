import { WhiteButton } from "../buttons";
import Image from "next/image";

export default function Cards() {
  return (
    <div
      className="landing-card-style relative flex flex-col items-center w-full p-6"
    >
      <div className="w-full flex flex-col gap-y-3">
        <div className="flex justify-between">
          <div className={"text-3xl shiny-title"}>Cards</div>
          <WhiteButton>Request new</WhiteButton>
        </div>
        <div className="flex gap-x-6 overflow-x-auto pb-6 pr-4 mt-2">
          <Image
            src="/assets/card-holder.svg"
            alt="card"
            width={283}
            height={182}
            className="object-contain rounded-4xl shadow-[6px_6px_0px_rgba(0,0,0,0.20)]"
          />
          <Image
            src="/assets/card-holder-2.svg"
            alt="card"
            width={283}
            height={182}
            className="object-contain rounded-4xl shadow-[6px_6px_0px_rgba(0,0,0,0.20)]"
          />
        </div>
      </div>
    </div>
  );
}
