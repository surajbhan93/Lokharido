"use client";

import { useCartStore } from "@/store/cartStore";
import { ShieldCheck, Truck } from "lucide-react";

export default function OrderSummary() {
    const { getCartTotal } = useCartStore();
    const { totalMRP, totalDiscount, finalPrice } = getCartTotal();

    return (
        <div className="sticky top-24">

            {/* 1. Coupon Section (Mock) */}
            <div className="bg-purple-50 border border-purple-100 p-4 rounded-xl mb-6">
                <p className="text-xs font-bold text-purple-700 mb-1">Best offer applied!</p>
                <p className="text-sm text-slate-700">
                    <span className="font-bold">NEW100</span> - Save extra ₹100 on your first order.
                </p>
            </div>

            {/* 2. Price Details */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Price Summary</h3>

                <div className="space-y-3 text-sm text-slate-700 mb-4">
                    <div className="flex justify-between">
                        <span>Total MRP (Incl. of taxes)</span>
                        <span>₹{totalMRP}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                        <span>Bag Discount</span>
                        <span>- ₹{totalDiscount}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Delivery Fee</span>
                        <span className="text-green-600 font-bold">FREE</span>
                    </div>
                </div>

                <div className="h-px bg-slate-200 my-4" />

                <div className="flex justify-between items-center mb-6">
                    <span className="font-bold text-slate-900">Total</span>
                    <span className="font-bold text-xl text-slate-900">₹{finalPrice}</span>
                </div>

                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3.5 rounded-lg shadow-md transition-colors uppercase tracking-wide">
                    Proceed to Checkout
                </button>
            </div>

            {/* 3. Trust Badges */}
            <div className="grid grid-cols-3 gap-2 mt-6">
                <div className="flex flex-col items-center text-center gap-1">
                    <div className="bg-slate-100 p-2 rounded-full"><ShieldCheck className="w-5 h-5 text-slate-500" /></div>
                    <span className="text-[10px] text-slate-500 font-medium">100% SECURE</span>
                </div>
                <div className="flex flex-col items-center text-center gap-1">
                    <div className="bg-slate-100 p-2 rounded-full"><Truck className="w-5 h-5 text-slate-500" /></div>
                    <span className="text-[10px] text-slate-500 font-medium">EASY RETURNS</span>
                </div>
                {/* Add more icons as needed */}
            </div>

        </div>
    );
}