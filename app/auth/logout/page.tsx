"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    router.replace("/login");
  }, [router]);

  return <p className="text-center mt-10">Logging out...</p>;
}
