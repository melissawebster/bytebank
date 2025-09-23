import NavDashboard from "@/src/components/dashboard/nav";
import Balance from "@/src/components/dashboard/balance";
import Cards from "@/src/components/dashboard/cards";
import PointsProgram from "@/src/components/dashboard/points-program";


export default async function Dashboard() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
    cache: "no-store",
  });
  const users = await res.json();

  return (
    <div className="flex flex-col">
      <div className="container flex mb-4 gap-x-4 mx-auto min-h-screen p-4 md:px-12 lg:px-16 xl:px-20 2xl:px-48">
        <div className="w-[20%] hidden lg:block">
          <NavDashboard className="hidden lg:block" />
        </div>
        <div className="flex flex-col items-center gap-y-4 w-full lg:w-[80%]">
          <NavDashboard className="hidden md:block lg:hidden" />
          <Balance data={users[0]} />
          <Cards />
          <PointsProgram />
        </div>
      </div>
    </div>
  );
}
