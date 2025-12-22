import Image from "next/image";
import Link from "next/link";

interface HeroCardProps {
    image: string;
    category: "MEN" | "WOMEN"; // Strict typing prevents typos
    href: string;
}

export default function HeroCard({ image, category, href }: HeroCardProps) {
    return (
        <Link href={href} className="group block relative w-full max-w-64 mx-auto">
            {/* 1. The Card Container */}
            <div className="relative aspect-3/4 rounded-3xl overflow-hidden border-2 border-sky-400 bg-white shadow-xl transition-transform duration-300 group-hover:-translate-y-2">

                {/* 2. The Image */}
                <Image
                    src={image}
                    alt={`${category} Fashion`}
                    fill
                    className="object-cover object-top"
                    priority // Loads image faster
                />

                {/* 3. The Bottom Label (Men/Women) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white py-3 text-center rounded-lg shadow-md">
                    <span className="font-black text-xl tracking-wider uppercase text-slate-900">
                        {category}
                    </span>
                </div>
            </div>
        </Link>
    );
}