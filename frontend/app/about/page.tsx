import { CheckCircle, Truck, ShieldCheck, Tag } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-white text-slate-900">

            {/* Header Section */}
            <section className="bg-slate-50 py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-black uppercase tracking-tight mb-4">About Lokharido</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        India’s Trusted Online Shopping Bazaar offering verified and quality products at affordable prices.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 container mx-auto px-4 max-w-4xl">
                <div className="prose prose-slate lg:prose-lg mx-auto">
                    <p className="text-xl leading-relaxed mb-8">
                        Lokharido is an Indian online shopping platform designed to provide a smooth shopping experience.
                        We ensure clear product descriptions, monthly offers, and complete transparency so you can shop with confidence.
                    </p>

                    <h2 className="text-2xl font-bold mb-6">What We Sell</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                        {["Men’s & Women’s Fashion", "Clothing, Shoes & Sarees", "Mobile & Laptop Accessories", "Home & Kitchen Essentials", "Gifts & Lifestyle Products"].map((item) => (
                            <li key={item} className="flex items-center gap-2 bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                                <Tag className="w-5 h-5 text-yellow-600" />
                                <span className="font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <h2 className="text-2xl font-bold mb-6">Why Shop With Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Feature icon={<CheckCircle />} title="Verified Quality" desc="100% Verified & quality checked products." />
                        <Feature icon={<ShieldCheck />} title="Honest Descriptions" desc="What you see is exactly what you get." />
                        <Feature icon={<Tag />} title="Monthly Sales" desc="Special offers and support for Indian startups." />
                        <Feature icon={<Truck />} title="Secure Service" desc="Customer-first service & secure payments." />
                    </div>
                </div>
            </section>
        </div>
    );
}

// Small helper component for the features
function Feature({ icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="flex gap-4 items-start p-4 border rounded-xl hover:shadow-md transition-shadow">
            <div className="text-yellow-500">{icon}</div>
            <div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-sm text-slate-600">{desc}</p>
            </div>
        </div>
    )
}