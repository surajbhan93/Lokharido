"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  name: string;
  email: string;
}

interface TopbarProps {
  user?: User | null;
}

export default function Topbar({ user }: TopbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // 🔒 Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🚪 Logout handler
  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  };

  return (
    <header className="h-16 bg-white border-b flex items-center justify-end px-8">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg">
            👤
          </div>
          <span className="font-medium text-gray-700">
            {user?.name || "Account"}
          </span>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-xl shadow-xl z-50 overflow-hidden">
            <Link
              href="/dashboard"
              className="block px-4 py-3 hover:bg-gray-50 border-b"
              onClick={() => setIsOpen(false)}
            >
              My Account
            </Link>

            <Link
              href="/wishlist"
              className="block px-4 py-3 hover:bg-gray-50 border-b"
              onClick={() => setIsOpen(false)}
            >
              My Wishlist
            </Link>

            <Link
              href="/dashboard/orders"
              className="block px-4 py-3 hover:bg-gray-50 border-b"
              onClick={() => setIsOpen(false)}
            >
              My Orders
            </Link>

            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-3 hover:bg-red-50 text-red-500"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
