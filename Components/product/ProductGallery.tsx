"use client";

import { useState, MouseEvent } from "react";
import Image from "next/image";

interface ProductGalleryProps {
    images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
    const [activeImage, setActiveImage] = useState(images[0]);

    // ZOOM STATE: Tracks if we are hovering and where the mouse is
    const [isZoomed, setIsZoomed] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // 1. Logic: Calculate where the mouse is relative to the image container
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

        // Calculate percentage position (0 to 100)
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        setMousePosition({ x, y });
    };

    return (
        <div className="flex flex-col-reverse max-w-lg md:flex-row gap-4 w-full">

            {/* Thumbnails (Unchanged) */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveImage(img)}
                        className={`relative w-16 h-20 md:w-20 md:h-24 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${activeImage === img ? "border-lok-blue ring-1 ring-lok-blue" : "border-transparent hover:border-slate-300"
                            }`}
                    >
                        <Image src={img} alt={`Thumbnail ${index}`} fill className="object-cover" />
                    </button>
                ))}
            </div>

            {/* Main Image Container */}
            <div
                className="relative w-full aspect-[3/4] md:aspect-[4/5] bg-slate-100 rounded-xl overflow-hidden cursor-crosshair"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove}
            >
                <Image
                    src={activeImage}
                    alt="Product View"
                    fill
                    className="object-cover transition-transform duration-200 ease-out"
                    style={{
                        // THE MAGIC: If zoomed, scale up and pan to mouse position
                        transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                        transform: isZoomed ? "scale(2.5)" : "scale(1)",
                    }}
                    priority
                />

                {/* Helper Text (Hides when zooming) */}
                {!isZoomed && (
                    <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm pointer-events-none transition-opacity">
                        Mouse over to zoom
                    </div>
                )}
            </div>

        </div>
    );
}