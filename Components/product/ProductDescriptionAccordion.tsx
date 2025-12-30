import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, RefreshCcw } from "lucide-react";
import { ProductDetails } from "@/data/product-details";

export default function ProductDescriptionAccordion({ product }: { product: ProductDetails }) {
    return (
        <div className="mt-8 mb-12 border rounded-xl overflow-hidden border-slate-200">
            <Accordion type="single" collapsible defaultValue="description">

                {/* ITEM 1: DESCRIPTION */}
                <AccordionItem value="description" className="bg-white px-4">
                    <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-slate-100 p-2 rounded-full"><FileText className="w-4 h-4 text-slate-700" /></div>
                            <span className="font-bold text-slate-800">Product Description</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed pb-6 pl-12">
                        <p className="mb-4">{product.description}</p>

                        <h4 className="font-bold text-slate-900 mb-2">Product Specifications</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                            {Object.entries(product.specifications).map(([key, value]) => (
                                <li key={key}>
                                    <span className="font-semibold text-slate-700">{key}: </span> {value}
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>

                {/* ITEM 2: RETURNS */}
                <AccordionItem value="returns" className="bg-white px-4 border-t border-slate-100">
                    <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-slate-100 p-2 rounded-full"><RefreshCcw className="w-4 h-4 text-slate-700" /></div>
                            <span className="font-bold text-slate-800">15 Days Returns & Exchange</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed pb-6 pl-12">
                        <p>{product.returnPolicy}</p>
                        <p className="text-xs text-slate-400 mt-2">
                            Note: Innerwear and personal care items are non-returnable.
                        </p>
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </div>
    );
}