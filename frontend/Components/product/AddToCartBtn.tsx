"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { ShoppingBag, Loader2 } from "lucide-react";
import { ProductDetails } from "@/data/product-details";

interface AddToCartBtnProps {
    product: ProductDetails;
    selectedSize: string;
}

export default function AddToCartBtn({ product, selectedSize }: AddToCartBtnProps) {
    const addItem = useCartStore((state) => state.addItem);
    const [isAdding, setIsAdding] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleAddToCart = () => {
        // 1. Validation
        if (!selectedSize) {
            alert("Please select a size first!"); // Simple alert for now (we can upgrade to Toast later)
            return;
        }

        // 2. Loading State (UX)
        setIsAdding(true);

        // 3. Add to Store (Simulate small delay for realism)
        setTimeout(() => {
            addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0], // Use first image as thumbnail
                originalPrice: product.originalPrice,
                size: selectedSize,
                quantity: 1
            });

            setIsAdding(false);
            setSuccess(true);

            // Reset success message after 2 seconds
            setTimeout(() => setSuccess(false), 2000);
        }, 500);
    };

    return (
        <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2
        ${success
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-yellow-500 text-white hover:bg-yellow-400"
                }
      `}
        >
            <ShoppingBag size={24} />
            {isAdding ? (
                <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Adding...
                </>
            ) : success ? (
                <>
                    Added to Bag!
                </>
            ) : (
                <>
                    ADD TO BAG
                </>
            )}
        </button>
    );
}