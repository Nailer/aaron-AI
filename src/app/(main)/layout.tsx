import Sidebar from "@/components/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#0B0E14] font-sans selection:bg-blue-500/20">
      <Sidebar />
      <div className="flex-1 ml-64 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
