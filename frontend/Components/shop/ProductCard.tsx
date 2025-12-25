import Image from "next/image";
import { Heart, Star } from "lucide-react";

interface ProductCardProps {
    image: string;
    brand: string;
    name: string;
    price: number;
    originalPrice: number;
    discount: string;
    rating: number;
}

export default function ProductCard({ image, brand, name, price, originalPrice, discount, rating }: ProductCardProps) {
    return (
        <div className="w-full cursor-pointer group border  rounded-sm bg-zinc-50 p-1 flex flex-col rounded-t-xl">
            {/* Image Section */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-3">
                <Image src={image} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />

                {/* Rating Badge */}
                <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" /> {rating}
                </div>

                {/* Wishlist Icon */}
                <button className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                    <Heart className="w-4 h-4 text-slate-600" />
                </button>
            </div>

            {/* Details Section */}
            <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase mb-1">{brand}</h3>
                <h2 className="text-sm font-medium text-slate-900 line-clamp-1 mb-1 group-hover:text-sky-600">{name}</h2>
                <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-slate-900">₹{price}</span>
                    <span className="text-xs text-slate-400 line-through">₹{originalPrice}</span>
                    <span className="text-xs font-bold text-green-600">{discount}</span>
                </div>
            </div>
        </div>
    );
}