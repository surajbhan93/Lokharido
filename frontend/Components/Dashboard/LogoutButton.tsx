"use client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    // 1. API ko call karein jo cookie clear kare
    await fetch("/api/auth/logout", { method: "POST" });
    
    // 2. Login page par bhej dein
    router.push("/auth");
    router.refresh(); // Taaki server state clear ho jaye
  };

  return (
    <button 
      onClick={handleLogout}
      className="text-red-500 w-full text-left px-4 py-2 hover:bg-red-50 rounded"
    >
      Logout
    </button>
  );
}