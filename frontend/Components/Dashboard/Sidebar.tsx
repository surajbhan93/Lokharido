"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Overview", path: "/dashboard" },
  { name: "My Orders", path: "/dashboard/orders" },
  { name: "My Payments", path: "/dashboard/payments" },
  { name: "My Wallet", path: "/dashboard/wallet" },
  { name: "My Addresses", path: "/dashboard/addresses" },
  { name: "My Profile", path: "/dashboard/profile" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r hidden md:flex flex-col">
      <div className="p-6 text-2xl font-bold text-blue-600">MY STORE</div>
      
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`block py-3 px-4 rounded-lg transition-colors ${
                isActive 
                ? "bg-blue-50 text-blue-600 font-medium" 
                : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t">
        <button className="w-full text-left py-3 px-4 text-red-500 hover:bg-red-50 rounded-lg transition">
          Logout
        </button>
      </div>
    </aside>
  );
}