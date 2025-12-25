"use client";

import { useState } from "react";

interface SizeSelectorProps {
    sizes: string[];
    selectedSize: string;
    onSelect: (size: string) => void;
}

export default function SizeSelector({ sizes, selectedSize, onSelect }: SizeSelectorProps) {


    const [error, setError] = useState(false); // To show "Please select a size" later


    return (
        <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-900">
                    Select Size
                    {selectedSize && <span className="text-lok-blue ml-2">({selectedSize})</span>}
                </h3>
                <button className="text-xs font-bold text-lok-blue uppercase hover:underline">
                    Size Chart
                </button>
            </div>

            <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                    <button
                        key={size}
                        onClick={() => onSelect(size)}
                        className={`
              w-12 h-12 rounded-lg font-bold text-sm transition-all flex items-center justify-center
              ${selectedSize === size
                                ? "bg-lok-blue text-sky-400 shadow-lg scale-110 border border-sky-400" // Active State
                                : "bg-white border border-slate-300 text-slate-700 hover:border-lok-blue hover:text-lok-blue" // Inactive
                            }
            `}
                    >
                        {size}
                    </button>
                ))}
            </div>

            {/* Helper text if needed later */}
            {!selectedSize && (
                <p className="text-xs text-slate-400 mt-2">Please select a size to continue</p>
            )}
        </div>
    );
}