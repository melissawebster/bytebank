import DashHeader from "@/src/components/dashboard/dash-header";
import Footer from "@/src/components/footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <DashHeader />
      <div className="container flex-1 mx-auto mt-[5rem]">{children}</div>
      <Footer />
    </div>
  );
}
