"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface HorizontalCarouselProps {
    title: string;
    viewAllHref?: string;
    items: React.ReactNode[];
}

export default function HorizontalCarousel({
    title,
    viewAllHref,
    items,
}: HorizontalCarouselProps) {
    return (
        <section className="mb-16">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold uppercase tracking-wider">{title}</h2>
                {viewAllHref && (
                    <a
                        href={viewAllHref}
                        className="text-sm font-bold text-green-600 uppercase"
                    >
                        View All
                    </a>
                )}
            </div>

            {/* Carousel */}
            <div className="relative px-6">
                <Carousel
                    opts={{
                        align: "start",
                        slidesToScroll: 2  // Scroll 2 items at a time
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-6">
                        {items.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-6 basis-1/5 shrink-0"  // Changed to basis-1/5 to show 5 items
                            >
                                <div className="h-full">
                                    {item}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>


                    <CarouselPrevious className="left-0" />
                    <CarouselNext className="right-0" />
                </Carousel>
            </div>
        </section>
    );
}