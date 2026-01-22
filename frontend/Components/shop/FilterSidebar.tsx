"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

type FilterSection = {
    id: string;
    name: string;
    options: string[];
};

const filters: FilterSection[] = [
    { id: "category", name: "Category", options: ["T-Shirts", "Shirts", "Kurtas", "Boxers", "Vests", "Shorts"] },
    { id: "size", name: "Sizes", options: ["XS", "S", "M", "L", "XL", "2XL", "3XL"] },
    { id: "brand", name: "Brand", options: ["Lokharido", "Urban Ranger", "Nomad"] },
    { id: "color", name: "Color", options: ["Black", "White", "Blue", "Red", "Beige", "Green"] },
    { id: "discount", name: "Discount", options: ["10", "30", "50", "70"] },
];

export default function FilterSidebar() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // ✅ Helper: get selected values for a filter
    const getValues = (key: string) =>
        searchParams.get(key)?.split(",") ?? [];

    // ✅ Toggle filter value in URL
    const toggleFilter = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams);
        const values = new Set(getValues(key));

        values.has(value) ? values.delete(value) : values.add(value);

        values.size
            ? params.set(key, Array.from(values).join(","))
            : params.delete(key);

        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    // ✅ Clear all filters
    const clearAll = () => {
        router.push(pathname, { scroll: false });
    };

    return (
        <div className="w-full h-[calc(100vh-120px)] overflow-y-auto pr-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold uppercase">Filters</h2>
                <button
                    onClick={clearAll}
                    className="text-sm text-lok-blue font-bold uppercase hover:underline"
                >
                    Clear All
                </button>
            </div>

            <Accordion type="multiple" className="w-full">
                {filters.map((section) => {
                    const selected = getValues(section.id);

                    return (
                        <AccordionItem key={section.id} value={section.id}>
                            <AccordionTrigger className="text-sm font-bold">
                                {section.name}
                            </AccordionTrigger>

                            <AccordionContent>
                                <div className="flex flex-col gap-3 pt-2">
                                    {section.options.map((option) => {
                                        const checked = selected.includes(option);

                                        return (
                                            <label
                                                key={option}
                                                className="flex items-center gap-2 cursor-pointer text-sm"
                                            >
                                                <Checkbox
                                                    checked={checked}
                                                    onCheckedChange={() =>
                                                        toggleFilter(section.id, option)
                                                    }
                                                />
                                                {option}
                                            </label>
                                        );
                                    })}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </div>
    );
}
