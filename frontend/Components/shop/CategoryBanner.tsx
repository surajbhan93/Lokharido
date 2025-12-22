import Image from "next/image";

interface CategoryBannerProps {
    category: string;
}

export default function CategoryBanner({ category }: CategoryBannerProps) {
    // In a real app, you would fetch the specific banner image based on the category.
    // For now, we will use a static "Denim" style banner for demo.

    return (
        <div className="relative w-full h-[250px] md:h-[300px] mb-8 rounded-xl overflow-hidden group">
            {/* Background Image */}
            <Image
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200&q=80" // Generic fashion banner
                alt={category}
                fill
                className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-700"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-yellow-400 font-bold tracking-widest uppercase mb-2">
                    New Styles Added
                </h3>
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
                    {category.replace("-", " ")} VERSE
                </h1>
                <div className="w-24 h-1 bg-yellow-400 rounded-full" />
                <p className="text-slate-200 mt-4 font-medium max-w-lg">
                    Explore the widest range of {category} tailored for the bold and the stylish.
                </p>
            </div>
        </div>
    );
}