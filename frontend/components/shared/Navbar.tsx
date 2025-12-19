import Link from "next/link";
import { Search, ShoppingBag, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button"; // Shadcn Button

export default function Navbar() {
    return (
        <header className="border-b">
            {/* Top Strip (Like Bewakoof's yellow strip) */}
            <div className="bg-slate-100 text-xs py-1 text-center">
                Get free shipping on orders over ₹500!
            </div>

            {/* Main Navbar */}
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">

                {/* 1. Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tight text-yellow-500">
                    LOKHARIDO
                </Link>

                {/* 2. Navigation Links (Hidden on mobile usually, but keep simple for now) */}
                <nav className="hidden md:flex gap-6 font-medium">
                    <Link href="/men" className="hover:text-yellow-500">Men</Link>
                    <Link href="/women" className="hover:text-yellow-500">Women</Link>
                    <Link href="/accessories" className="hover:text-yellow-500">Accessories</Link>
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
                        <ShoppingBag className="w-5 h-5" />
                    </Button>

                    <Button variant="ghost" size="icon">
                        <User className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </header>
    );
}