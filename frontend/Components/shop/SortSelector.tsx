"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortSelector({ current }: { current: string }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    function handleChange(value: string) {
        const params = new URLSearchParams(searchParams.toString());
        params.set("sort", value);
        router.push(`?${params.toString()}`, { scroll: false });
    }

    return (
        <select
            value={current}
            onChange={(e) => handleChange(e.target.value)}
            className="border border-slate-300 rounded-md p-2 text-sm"
        >
            <option value="popularity">Popularity</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
        </select>
    );
}
