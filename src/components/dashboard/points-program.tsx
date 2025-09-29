import { User } from "@/src/app/api/users/types";
import { DashButton } from "../buttons";


interface Props {
  data: User;
}

export default function PointsProgram({ data }: Props) {
  const currentPoints = data.points;
  const goalPoints = 3000;
  const percentage = (currentPoints / goalPoints) * 100;

  return (
    <div
      className="landing-card-style no-hover-effect relative flex flex-col items-center w-full p-6"
    >
      {/* Title */}
      <div className="w-full flex flex-col gap-y-6">
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-4">
            <div className={"text-3xl shiny-title"}>Points</div>
            <div className="text-white text-4xl">{data.points} pts</div>
          </div>
          <DashButton>See more</DashButton>
        </div>
      </div>


        {/* Numbers */}
        <div className="flex w-full justify-end text-sm  text-white mb-2">
          <span>{goalPoints} pts</span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-6 bg-slate-600 border rounded-md overflow-hidden">
          <div
            className="h-6 bg-yellow-800 border border-yellow-500 rounded-l-md transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Extra info */}
        <p className="mt-2 text-sm w-full text-white">
          <span className="text-yellow-500">{goalPoints - currentPoints}</span> pts to reach your goal 🎉
        </p>

    </div>
  );
}
