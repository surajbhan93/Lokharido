import React from "react";

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

export default function PolicySection({ title, children }: SectionProps) {
    return (
        <section className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm transition-hover hover:shadow-md">
            <h2 className="text-xl font-bold mb-4 text-slate-900">{title}</h2>
            <div className="text-slate-600 leading-relaxed">
                {children}
            </div>
        </section>
    );
}