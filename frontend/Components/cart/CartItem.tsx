"use client";

import Image from "next/image";
import { Trash2, ChevronDown } from "lucide-react";
import { useCartStore, CartItem as CartItemType } from "@/store/cartStore";

export default function CartItem({ item }: { item: CartItemType }) {
    const { removeItem, updateQuantity } = useCartStore();

    return (
        <div className="flex gap-4 border border-slate-200 rounded-xl p-4 bg-white shadow-sm mb-4 relative">

            {/* 1. Image */}
            <div className="relative w-24 h-32 shrink-0 rounded-md overflow-hidden bg-slate-100">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
            </div>

            {/* 2. Details */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start">
                        <h3 className="text-slate-700 font-medium text-sm md:text-base leading-snug max-w-[80%]">
                            {item.name}
                        </h3>
                        {/* Close/Remove Button */}
                        <button
                            onClick={() => removeItem(item.id, item.size)}
                            className="text-slate-400 hover:text-red-500 transition-colors"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>

                    <p className="text-xs text-green-600 font-medium mt-1">✔ Ships within a few days</p>
                </div>

                {/* Pricing & Controls */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">

                    {/* Size & Qty Dropdowns */}
                    <div className="flex items-center gap-4 text-sm">
                        <div className="bg-slate-50 border border-slate-200 px-3 py-1 rounded text-slate-700 font-medium">
                            Size: {item.size}
                        </div>

                        <div className="relative">
                            <select
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, item.size, Number(e.target.value))}
                                className="appearance-none bg-slate-50 border border-slate-200 pl-3 pr-8 py-1 rounded text-slate-700 font-medium focus:outline-none focus:border-lok-blue cursor-pointer"
                            >
                                {[1, 2, 3, 4, 5].map(num => (
                                    <option key={num} value={num}>Qty: {num}</option>
                                ))}
                            </select>
                            <ChevronDown className="w-3 h-3 text-slate-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                    </div>

                    {/* Price Block */}
                    <div className="text-right">
                        <div className="flex items-center gap-2 justify-end">
                            <span className="font-bold text-lg text-slate-900">₹{item.price * item.quantity}</span>
                            <span className="text-slate-400 line-through text-sm">₹{item.originalPrice * item.quantity}</span>
                        </div>
                        <p className="text-xs text-green-600 font-bold">
                            You saved ₹{(item.originalPrice - item.price) * item.quantity}!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}