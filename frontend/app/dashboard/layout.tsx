import { redirect } from "next/navigation";
import { getUserFromToken } from "@/lib/auth";
import Sidebar from "@/Components/Dashboard/Sidebar";
import Topbar from "@/Components/Dashboard/Topbar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUserFromToken();

  if (!user) {
    redirect("/auth"); // server-side redirect
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Topbar user={user} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
