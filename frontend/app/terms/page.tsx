import PolicySection from "@/components/shared/PolicySection";

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl text-slate-800">
            <h1 className="text-4xl font-black mb-2 uppercase tracking-tight">Terms of Service</h1>
            <p className="text-slate-500 mb-8 font-medium">Effective Date: 1 January 2026</p>

            <div className="space-y-8">

                <PolicySection title="1. Acceptance of Terms">
                    <p>
                        By accessing or using Lokharido ("we", "our", "us"), you agree to be bound by these Terms.
                        If you do not agree, please do not use our services.
                    </p>
                </PolicySection>

                <PolicySection title="2. Product Information">
                    <p className="mb-2">We strive for accuracy, but please note:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Images:</strong> Product images are for reference only. Actual color may vary slightly due to screen settings.</li>
                        <li><strong>Pricing:</strong> Prices and offers may change without prior notice.</li>
                        <li><strong>Availability:</strong> All items are subject to stock availability.</li>
                    </ul>
                </PolicySection>

                <PolicySection title="3. User Conduct">
                    <p>
                        You agree not to misuse our platform. Any fraudulent activity or misuse of discount offers
                        may lead to order cancellation or permanent account restriction.
                    </p>
                </PolicySection>

                <PolicySection title="4. Governing Law">
                    <p>
                        These terms are governed by the laws of India. Any disputes or legal matters arising
                        are subject to the exclusive jurisdiction of the courts in <strong>Prayagraj, Uttar Pradesh</strong>.
                    </p>
                </PolicySection>

            </div>
        </div>
    );
}