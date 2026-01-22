import CategoryBanner from "@/components/shop/CategoryBanner";
import FilterSidebar from "@/components/shop/FilterSidebar";
import ProductCard from "@/components/shop/ProductCard";
import { trendingShirts } from "@/data/men";
import SortSelector from "@/components/shop/SortSelector";

interface PageProps {
    params: Promise<{
        category: string;
    }>;
    searchParams: Promise<{
        size?: string;
        color?: string;
        brand?: string;
        sort?: string;
    }>;
}

export default async function CategoryPage({
    params,
    searchParams,
}: PageProps) {

    // ✅ Await BOTH
    const { category } = await params;
    const filters = await searchParams;

    // ✅ Now safe
    const sizes = filters.size?.split(",") ?? [];
    const colors = filters.color?.split(",") ?? [];
    const brands = filters.brand?.split(",") ?? [];
    const sort = filters.sort ?? "popularity";

    // 🔹 TEMP: client-side filtering (later DB)
    let products = [...trendingShirts];

    if (sizes.length) {
        products = products.filter(p => sizes.includes(p.size));
    }

    if (colors.length) {
        products = products.filter(p => colors.includes(p.color));
    }

    if (brands.length) {
        products = products.filter(p => brands.includes(p.brand));
    }

    // 🔹 Sorting
    if (sort === "price-asc") {
        products.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-desc") {
        products.sort((a, b) => b.price - a.price);
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <CategoryBanner category={category} />

            <div className="flex flex-col md:flex-row gap-8">

                <aside className="w-full md:w-[250px] shrink-0">
                    <div className="sticky top-24">
                        <FilterSidebar />
                    </div>
                </aside>

                <main className="flex-1">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold uppercase">
                            {category.replace("-", " ")}
                            <span className="text-slate-400 text-sm ml-2">
                                ({products.length} Products)
                            </span>
                        </h2>

                        {/* Sort dropdown should ALSO update URL */}
                        <SortSelector current={sort} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
