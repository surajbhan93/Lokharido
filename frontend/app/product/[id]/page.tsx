"use client";

import { useState, use } from "react";
import ProductGallery from "@/components/product/ProductGallery";
import { sampleProduct } from "@/data/product-details"; // Import the data we made in Step 1
import ProductInfo from "@/components/product/ProductInfo";
import SizeSelector from "@/components/product/SizeSelector";
import DeliveryChecker from "@/components/product/DeliveryChecker";
import ProductDescriptionAccordion from "@/components/product/ProductDescriptionAccordion";
import ProductReviews from "@/components/product/ProductReviews";
import AddToCartBtn from "@/components/product/AddToCartBtn";


// Helper Interface (Next.js 15)
interface PageProps {
    params: Promise<{ id: string }>;
}

export default function ProductDetailsPage({ params }: PageProps) {
    // In a real app, we would use 'await params.id' to fetch data from a backend.
    // For now, we just ignore the ID and show our 'sampleProduct'.
    const [selectedSize, setSelectedSize] = useState("");
    const { id } = use(params);

    return (
        <div className="container mx-auto px-4 py-8">

            {/* Breadcrumb (Navigation Path) */}
            <div className="text-sm text-slate-500 mb-6">
                Home / Men / Jackets / <span className="text-slate-900 font-semibold">{sampleProduct.name}</span>
            </div>

            {/* MAIN GRID: Left (Images) - Right (Details) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* LEFT COLUMN: Gallery */}
                <div className="sticky top-24 self-start">
                    <ProductGallery images={sampleProduct.images} />
                </div>

                {/* RIGHT COLUMN: Details */}
                <div>
                    <ProductInfo product={sampleProduct} />
                    <SizeSelector
                        sizes={sampleProduct.sizes}
                        selectedSize={selectedSize}      // Add this prop to SizeSelector
                        onSelect={setSelectedSize}       // Add this prop to SizeSelector
                    />

                    <div className="mb-8">
                        <AddToCartBtn product={sampleProduct} selectedSize={selectedSize} />
                    </div>
                    <div className="h-px bg-slate-200 my-6" />

                    {/* INTERACTIVE SECTIONS */}

                    <DeliveryChecker />


                    <ProductDescriptionAccordion product={sampleProduct} />
                    <div className="mt-12 max-w-4xl">
                        <ProductReviews product={sampleProduct} mode="summary" />
                    </div>
                </div>


            </div>
        </div>
    );
}