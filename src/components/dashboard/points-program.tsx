import { darkCardStyle } from "../shared";

export default function PointsProgram() {
  return (
    <div className={`${darkCardStyle} relative flex flex-col items-center w-full min-h-[300px]`}>
      <div className="w-full flex flex-col gap-y-6">
        <div className="text-2xl shiny-title">Points Program</div>
      </div>
    </div>
  );
}
