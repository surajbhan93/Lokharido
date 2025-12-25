"use client";

import Link from "next/link";
import { Search, ShoppingBag, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button"; // Shadcn Button
import { useCartStore } from "@/store/cartStore";

export default function Navbar() {
    // Read the total count from Zustand
    // The state selector ensures this ONLY re-renders when 'items' changes
    const totalItems = useCartStore((state) => state.getTotalItems());
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
            {/* Top Strip (Like Bewakoof's yellow strip) */}
            <div className="bg-slate-100 text-xs py-1 text-center">
                Get free shipping on orders over ₹500!
            </div>

            {/* Main Navbar */}
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">

                {/* 1. Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tight text-sky-400">
                    LOKHARIDO

                </Link>

                {/* 2. Navigation Links (Hidden on mobile usually, but keep simple for now) */}
                <nav className="hidden md:flex gap-6 font-medium">
                    <Link href="/men" className="hover:text-sky-400">Men</Link>
                    <Link href="/women" className="hover:text-sky-400">Women</Link>
                    <Link href="/accessories" className="hover:text-sky-400">Accessories</Link>
                </nav>

                {/* 3. Search & Icons */}
                <div className="flex items-center gap-4">
                    {/* Search Bar Visual Only */}
                    <div className="hidden md:flex items-center border rounded-full px-3 py-1 bg-gray-50">
                        <Search className="w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent border-none focus:outline-none text-sm ml-2 w-40"
                        />
                    </div>

                    <Button variant="ghost" size="icon">
                        <Heart className="w-5 h-5" />
                    </Button>

                    <Button variant="ghost" size="icon">
                        <Link href="/cart" className="relative p-2 hover:bg-slate-100 rounded-full">
                            <ShoppingBag size={24} />

                            {/* The Red Badge */}
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                    </Button>



                    <Button variant="ghost" size="icon">
                        <User className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </header>
    );
}