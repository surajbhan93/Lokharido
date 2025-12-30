"use client";

import Link from "next/link";
import { Search, ShoppingBag, Heart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const totalItems = useCartStore((state) => state.getTotalItems());

  const router = useRouter();
  const pathname = usePathname(); // 👈 current page

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      
      {/* Top Strip */}
      <div className="bg-yellow-400 text-xs py-1 text-center font-medium">
        Free Shipping on Orders Above ₹499
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-6">

        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          LOKHARIDO
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex gap-6 font-semibold text-sm">
          <Link href="/men" className="hover:text-yellow-500">MEN</Link>
          <Link href="/women" className="hover:text-yellow-500">WOMEN</Link>
          <Link href="/mobile-covers" className="hover:text-yellow-500">
            MOBILE COVERS
          </Link>
        </nav>

        {/* Search */}
        <div className="flex-1 hidden md:flex">
          <div className="w-full max-w-md flex items-center bg-gray-100 rounded-full px-4 py-2">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search by products"
              className="bg-transparent outline-none text-sm ml-3 w-full"
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 text-sm font-medium">

          {/* ✅ LOGIN BUTTON WITH REDIRECT */}
          <button
            onClick={() =>
              router.push(
                `/auth/login?redirect=${encodeURIComponent(pathname)}`
              )
            }
            className="hover:text-yellow-500"
          >
            LOGIN
          </button>

          <Heart className="w-5 h-5 cursor-pointer hover:text-yellow-500" />

          <Link href="/cart" className="relative">
            <ShoppingBag className="w-5 h-5 hover:text-yellow-500" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
