import { DashButton } from "../buttons";
import Image from "next/image";

export default function Cards() {
  return (
    <div
      className="landing-card-style no-hover-effect relative flex flex-col items-center w-full p-6"
    >
      <div className="w-full flex flex-col gap-y-3">
        <div className="flex justify-between">
          <div className={"text-3xl shiny-title"}>Cards</div>
          <DashButton>Request new</DashButton>
        </div>
        <div className="flex gap-x-6 overflow-x-auto p-2 mt-2">
          <Image
            src="/assets/card-holder.svg"
            alt="card"
            width={283}
            height={182}
            className="card-img-style"
          />
          <Image
            src="/assets/card-holder-2.svg"
            alt="card"
            width={283}
            height={182}         
            className="card-img-style"
          />
        </div>
      </div>
    </div>
  );
}
