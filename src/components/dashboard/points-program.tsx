import { blueCardStyle } from "../shared";

export default function PointsProgram() {
  return (
    <div className={`${blueCardStyle} relative flex flex-col items-center w-full min-h-[300px] p-6`}>
      <div className="w-full flex flex-col gap-y-6">
        <div className="text-3xl shiny-title">Points Program</div>
      </div>
    </div>
  );
}
