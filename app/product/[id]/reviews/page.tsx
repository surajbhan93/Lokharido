import ProductReviews from "@/components/product/ProductReviews";
import { sampleProduct } from "@/data/product-details";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

// Next.js 15: params is a Promise
interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ReviewsPage({ params }: PageProps) {
    const { id } = await params;

    // In real app, fetch reviews for 'id' here

    return (
        <div className="container mx-auto px-4 py-8 max-w-3xl">
            {/* Header with Back Button */}
            <div className="flex items-center gap-4 mb-8">
                <Link href={`/product/${id}`} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                    <ChevronLeft className="w-6 h-6 text-slate-700" />
                </Link>
                <h1 className="text-xl font-bold text-slate-900 uppercase">
                    All Reviews for {sampleProduct.name}
                </h1>
            </div>

            {/* The Component in FULL Mode */}
            <ProductReviews product={sampleProduct} mode="full" />
        </div>
    );
}