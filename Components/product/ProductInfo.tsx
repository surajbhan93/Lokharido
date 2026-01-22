import { Star, Truck, ShieldCheck, Tag } from "lucide-react";
import { ProductDetails } from "@/data/product-details";

interface ProductInfoProps {
    product: ProductDetails;
}

export default function ProductInfo({ product }: ProductInfoProps) {
    return (
        <div className="flex flex-col gap-6">

            {/* 1. Header: Brand, Title, Rating */}
            <div>
                <h2 className="text-xl font-bold text-lok-blue uppercase tracking-wide mb-1">
                    {product.brand}
                </h2>
                <h1 className="text-2xl md:text-3xl font-medium text-slate-900 mb-3">
                    {product.name}
                </h1>

                {/* Rating Badge */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded text-sm font-bold text-slate-900 border border-slate-200">
                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                        {product.rating}
                    </div>
                    <span className="text-slate-500 text-sm hover:text-lok-blue underline cursor-pointer">
                        {product.reviewCount} Reviews
                    </span>
                </div>
            </div>

            {/* 2. Price Section */}
            <div className="flex items-end gap-3 pb-6 border-b border-slate-200">
                <span className="text-3xl font-bold text-slate-900">
                    ₹{product.price}
                </span>
                <span className="text-lg text-slate-400 line-through mb-1">
                    ₹{product.originalPrice}
                </span>
                <span className="text-lg font-bold text-green-600 mb-1">
                    {product.discount}% OFF
                </span>
            </div>

            {/* 3. Offers (Accordion Style) */}
            <div className="space-y-3">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                    <Tag className="w-4 h-4 text-lok-blue" />
                    Best Offers
                </h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 space-y-2">
                    {product.offers.map((offer, index) => (
                        <div key={index} className="flex gap-2 items-start text-sm text-slate-700">
                            <span className="text-yellow-600 font-bold">•</span>
                            {offer}
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. Trust Badges (Static for now) */}
            <div className="grid grid-cols-2 gap-4 py-4">
                <div className="flex items-center gap-3 text-sm text-slate-600 border p-3 rounded-lg">
                    <Truck className="w-5 h-5 text-lok-blue" />
                    <span>Fast Delivery</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600 border p-3 rounded-lg">
                    <ShieldCheck className="w-5 h-5 text-lok-blue" />
                    <span>{product.returnPolicy}</span>
                </div>
            </div>

        </div>
    );
}