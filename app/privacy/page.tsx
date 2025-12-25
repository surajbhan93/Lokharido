import PolicySection from "@/components/shared/PolicySection";
export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl text-slate-800">

            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-slate-500 mb-8">Effective Date: 1 January 2026</p>

            <div className="space-y-8">

                <PolicySection title="1. Introduction">
                    <p>
                        Lokharido (“we”, “our”, “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our app.
                    </p>
                </PolicySection>

                <PolicySection title="2. Information We Collect">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Name, email address, phone number</li>
                        <li>Payment information (if any)</li>
                        <li>Location data (if enabled)</li>
                        <li>Usage data (pages visited, clicks, app usage)</li>
                    </ul>
                </PolicySection>

                <PolicySection title="3. How We Use Your Information">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Provide and improve our services</li>
                        <li>Process transactions and orders</li>
                        <li>Send updates, offers, and notifications (with consent)</li>
                        <li>Analyze website and app usage for better experience</li>
                    </ul>
                </PolicySection>

                <PolicySection title="4. Contact Us">
                    <p>If you have any questions about this Privacy Policy, contact us:</p>
                    <p className="font-medium mt-2">Email: support@lokharido.com</p>
                </PolicySection>

            </div>
        </div>
    );
}

