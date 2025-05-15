import DashHeader from "@/src/components/dashboard/dash-header";

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex flex-col min-h-screen bg-pearl-green">
        <DashHeader />
        {children}
      </div>
    );
  }