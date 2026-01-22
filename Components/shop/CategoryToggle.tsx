"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategoryToggle() {
    const pathname = usePathname();
    const isMen = pathname === "/men";

    return (
        <div className="flex gap-4 mb-8">
            <Link href="/men">
                <div className={`px-8 py-2 rounded-full font-bold text-sm transition-all border-2 ${isMen ? 'bg-sky-400 border-sky-400 text-white' : 'bg-black border-slate-200 text-slate-500'}`}>
                    MEN
                </div>
            </Link>
            <Link href="/women">
                <div className={`px-8 py-2 rounded-full font-bold text-sm transition-all border-2 ${!isMen ? 'bg-sky-400 border-sky-400 text-black' : 'bg-white border-slate-200 text-slate-500'}`}>
                    WOMEN
                </div>
            </Link>
        </div>
    );
}