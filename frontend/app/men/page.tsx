"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useMemo } from "react";
import Autoplay from "embla-carousel-autoplay";
import CategoryToggle from "@/components/shop/CategoryToggle";
import ProductCard from "@/components/shop/ProductCard";
import Image from "next/image";
import { menHeroImages, trendingCategories, trendingShirts, trendingPants } from "@/data/men";
import HorizontalCarousel from "@/components/shared/HorizontalCarousel";



export default function MenPage() {

    const autoplay = useMemo(
        () => Autoplay({ delay: 3000 }),
        []
    );

    return (
        <div className="container mx-auto px-4 py-8">

            {/* 1. Toggle Button */}
            <CategoryToggle />

            {/* 2. Hero Carousel (Auto-slide & Manual) */}
            <section className="mb-12">
                <Carousel
                    plugins={[autoplay]} className="w-full rounded-2xl overflow-hidden"
                >
                    <CarouselContent>
                        {menHeroImages.map((banner) => (
                            <CarouselItem key={banner.id} className="relative w-full h-[300px] md:h-[400px]">

                                {/* 1. The Background Image */}
                                <Image
                                    src={banner.image}
                                    alt={banner.title}
                                    fill
                                    className="object-cover brightness-75" // Dims image slightly so text pops
                                    priority={banner.id === 1} // Loads first image faster
                                />

                                {/* 2. The Text Overlay (This makes it look real) */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
                                    <h2 className={`text-sm md:text-lg font-bold tracking-widest uppercase mb-4 ${banner.color} opacity-90`}>
                                        Lokharido Exclusive
                                    </h2>
                                    <h1 className={`text-4xl md:text-7xl font-black tracking-tight mb-6 max-w-4xl ${banner.color}`}>
                                        {banner.title}
                                    </h1>
                                    <p className={`text-lg md:text-2xl font-medium mb-8 max-w-2xl ${banner.color} opacity-90`}>
                                        {banner.subtitle}
                                    </p>
                                    <Link href={banner.link}>
                                        <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold px-10 py-6 text-lg rounded-full shadow-xl">
                                            {banner.cta}
                                        </Button>
                                    </Link>
                                </div>

                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                </Carousel>
            </section>

            <section className="mb-16">
                <h2 className="text-xl font-bold text-center uppercase tracking-wider mb-8">
                    Trending Categories
                </h2>

                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {trendingCategories.map((cat) => (
                            <CarouselItem
                                key={cat.name}
                                className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/6"
                            >
                                <div className="relative aspect-[3/4] group cursor-pointer overflow-hidden rounded-lg">
                                    <Image
                                        src={cat.image}
                                        alt={cat.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                    <span className="absolute bottom-4 left-0 w-full text-center text-white font-bold text-lg">
                                        {cat.name}
                                    </span>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Chevrons */}
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                </Carousel>
            </section>


            {/* 4. Trending Shirts (Horizontal List) */}
            <HorizontalCarousel
                title="Trending Shirts"
                viewAllHref="/shirts"
                items={trendingShirts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            />


            {/* 5. Trending Pants (Now using HorizontalCarousel component) */}
            <HorizontalCarousel
                title="Trending Pants & Jeans"
                viewAllHref="/pants"
                items={trendingPants.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            />

        </div>
    );
}