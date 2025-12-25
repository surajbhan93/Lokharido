import PolicySection from "@/components/shared/PolicySection";
import { CheckCircle, AlertTriangle, Clock, RefreshCcw } from "lucide-react";

export default function ReturnPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl text-slate-800">
      <h1 className="text-4xl font-black mb-2 uppercase tracking-tight">Return Policy</h1>
      <p className="text-slate-500 mb-8 font-medium">Effective Date: 1 January 2026</p>

      <div className="space-y-6">

        <PolicySection title="7-Day Return Window">
          <div className="flex gap-4 items-start">
            <Clock className="text-yellow-500 w-6 h-6 shrink-0" />
            <p>Returns are accepted within <span className="font-bold text-slate-900">7 days</span> of the delivery date. We recommend initiating the return request as soon as possible.</p>
          </div>
        </PolicySection>

        <PolicySection title="Condition of Items">
          <div className="flex gap-4 items-start">
            <CheckCircle className="text-green-500 w-6 h-6 shrink-0" />
            <p>Items must be unused, unwashed, and in their original packaging with all tags intact. We conduct a quality check before processing refunds.</p>
          </div>
        </PolicySection>

        <PolicySection title="Non-Returnable Items">
          <div className="flex gap-4 items-start">
            <AlertTriangle className="text-red-500 w-6 h-6 shrink-0" />
            <div>
              <p className="mb-2">For hygiene and safety reasons, the following categories cannot be returned:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-500 text-sm">
                <li>Innerwear & Lingerie</li>
                <li>Personal Care & Beauty Products</li>
                <li>Clearance / Sale Items</li>
              </ul>
            </div>
          </div>
        </PolicySection>

        <PolicySection title="Refund Process">
          <div className="flex gap-4 items-start">
            <RefreshCcw className="text-blue-500 w-6 h-6 shrink-0" />
            <p>Once we receive your return, it undergoes a quality check. Refunds are processed within 5-7 business days to your original payment method.</p>
          </div>
        </PolicySection>

      </div>
    </div>
  );
}