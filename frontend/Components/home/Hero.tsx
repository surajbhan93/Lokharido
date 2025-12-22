import HeroCard from "./HeroCard";

export default function Hero() {
    return (
        <section className="relative bg-linear-to-t from-sky-400 to-white py-12 md:py-20 overflow-hidden">

            {/* 1. The 'SHOP FOR' Header */}
            <div className="text-center mb-10 relative z-10">
                <h2 className="text-xl font-bold tracking-widest text-slate-800 mb-2">
                    lokharido
                </h2>
                <h1 className="text-5xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">
                    Shop For
                </h1>
                {/* Decorative underline */}
                <div className="w-24 h-1 bg-black mx-auto mt-4 rounded-full"></div>
            </div>

            {/* 2. The Cards Container */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto items-center">

                    {/* Card 1: MEN */}
                    <HeroCard
                        category="MEN"
                        // Using a placeholder image for now - Replace with your own later!
                        image="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80"
                        href="/men"
                    />

                    {/* Card 2: WOMEN */}
                    <HeroCard
                        category="WOMEN"
                        // Using a placeholder image for now
                        image="https://images.unsplash.com/photo-1627483297929-37f416fec7cd?w=800&q=80"
                        href="/women"
                    />


                </div>
            </div>

            {/* 3. (Optional) Background Decoration Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

        </section>
    );
}