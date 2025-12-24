"use client"; // Needs client for the filter buttons

import Link from "next/link";
import { Star, ThumbsUp, CheckCircle } from "lucide-react";
import { ProductDetails } from "@/data/product-details";

interface ProductReviewsProps {
    product: ProductDetails;
    mode?: "summary" | "full"; // 'summary' = Product Page, 'full' = Reviews Page
}

export default function ProductReviews({ product, mode = "summary" }: ProductReviewsProps) {
    const totalRatings = Object.values(product.ratingBreakdown).reduce((a, b) => a + b, 0);

    // LOGIC: If summary, only take top 3. If full, take all.
    const displayedReviews = mode === "summary" ? product.reviews.slice(0, 3) : product.reviews;

    return (
        <div className="py-8 border-t border-slate-200" id="reviews">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                Ratings & Reviews <span className="text-sm font-normal text-slate-500">({product.reviewCount})</span>
            </h3>

            {/* 1. RATING SUMMARY (Keep this visible on both pages) */}
            <div className="flex flex-col md:flex-row gap-10 mb-10 border-b border-slate-100 pb-8">
                {/* Left: Score */}
                <div className="text-center md:text-left min-w-[120px]">
                    <div className="text-5xl font-black text-slate-900 mb-2 flex items-center justify-center md:justify-start gap-2">
                        {product.rating} <Star className="w-8 h-8 fill-lok-blue text-lok-blue" />
                    </div>
                    <p className="text-slate-500 text-sm">Based on {totalRatings} verified ratings</p>
                </div>

                {/* Right: Bars */}
                <div className="flex-1 space-y-3">
                    {[5, 4, 3, 2, 1].map((star) => {
                        const count = product.ratingBreakdown[star as keyof typeof product.ratingBreakdown];
                        const percentage = (count / totalRatings) * 100;
                        const barColor = star >= 4 ? "bg-green-500" : star === 3 ? "bg-orange-400" : "bg-red-500";
                        return (
                            <div key={star} className="flex items-center gap-4 text-sm">
                                <span className="w-6 font-bold text-slate-700 flex items-center gap-1">{star} <Star className="w-3 h-3 text-slate-400" /></span>
                                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className={`h-full rounded-full ${barColor}`} style={{ width: `${percentage}%` }} />
                                </div>
                                <span className="w-8 text-slate-400 text-xs">{count}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* 2. FILTER BUTTONS (Only show on FULL page) */}
            {mode === "full" && (
                <div className="mb-8 flex flex-wrap gap-3">
                    {["Most Helpful", "Most Recent", "With Images", "Critical"].map((filter, i) => (
                        <button key={filter} className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${i === 0 ? 'bg-lok-blue text-white border-lok-blue' : 'bg-white text-slate-600 border-slate-300 hover:border-lok-blue'}`}>
                            {filter}
                        </button>
                    ))}
                </div>
            )}

            {/* 3. REVIEWS LIST */}
            <div className="space-y-8">
                {displayedReviews.map((review) => (
                    <div key={review.id} className="border-b border-slate-100 pb-6">
                        {/* Rating & Badge */}
                        <div className="flex items-center gap-2 mb-2">
                            <div className={`px-2 py-0.5 rounded text-xs font-bold text-white flex items-center gap-1 ${review.rating >= 4 ? 'bg-green-600' : 'bg-orange-500'}`}>
                                {review.rating} <Star className="w-3 h-3 fill-white" />
                            </div>
                            {/* Verified Badge (From Screenshot) */}
                            <span className="flex items-center gap-1 text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                                <CheckCircle className="w-3 h-3" /> Verified Buyer
                            </span>
                        </div>

                        <p className="text-slate-800 font-medium text-sm mb-2">{review.comment}</p>

                        {/* Mock Images (Based on screenshot) */}
                        {mode === "full" && (
                            <div className="flex gap-2 mb-3">
                                <div className="w-16 h-16 bg-slate-100 rounded-lg"></div>
                                <div className="w-16 h-16 bg-slate-100 rounded-lg"></div>
                            </div>
                        )}

                        <div className="flex items-center justify-between text-xs text-slate-400">
                            <div className="flex items-center gap-2">
                                <span>{review.user}</span>
                                <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                <span>{review.date}</span>
                            </div>
                            <div className="flex items-center gap-1 cursor-pointer hover:text-slate-600">
                                <ThumbsUp className="w-3 h-3" /> Helpful
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* 4. VIEW ALL BUTTON (Only show on SUMMARY mode) */}
            {mode === "summary" && (
                <div className="mt-8">
                    <Link href={`/product/${product.id}/reviews`}>
                        <button className="w-full border border-slate-300 py-3 rounded-lg font-bold text-lok-blue hover:bg-slate-50 transition-colors uppercase text-sm tracking-wide">
                            View All Reviews
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}