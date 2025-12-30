"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import CartItem from "@/components/cart/CartItem";
import OrderSummary from "@/components/cart/OrderSummary";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default function CartPage() {
    const { items, getCartTotal } = useCartStore();
    const { totalDiscount } = getCartTotal();

    // 1. EMPTY STATE
    if (items.length === 0) {
        return (
            <div className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4">
                <div className="bg-slate-100 p-6 rounded-full mb-6">
                    <ShoppingBag className="w-12 h-12 text-slate-400" />
                </div>
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Your Bag is Empty</h1>
                <p className="text-slate-500 mb-8 max-w-sm">
                    Looks like you haven't added anything to your bag yet. Start shopping to fill it up!
                </p>
                <Link href="/men">
                    <button className="bg-lok-blue text-black px-8 py-3 rounded-full font-bold shadow-lg hover:bg-sky-500 hover:text-white transition-all flex items-center gap-2">
                        Start Shopping <ArrowRight className="w-4 h-4" />
                    </button>
                </Link>
            </div>
        );
    }

    // 2. FILLED CART STATE
    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <h1 className="text-xl font-bold text-slate-900 mb-6">My Bag ({items.length} Items)</h1>

            {/* Savings Banner (Matches screenshot green banner) */}
            {totalDiscount > 0 && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center gap-2 font-medium text-sm">
                    <span className="font-bold">Note:</span> You are saving ₹{totalDiscount} on this order!
                </div>
            )}

            <div className="flex flex-col lg:flex-row gap-8 relative">

                {/* Left Column: Items List */}
                <div className="flex-1">
                    {items.map((item) => (
                        <CartItem key={`${item.id}-${item.size}`} item={item} />
                    ))}
                </div>

                {/* Right Column: Summary (Sticky) */}
                <div className="w-full lg:w-[380px] shrink-0">
                    <OrderSummary />
                </div>

            </div>
        </div>
    );
}