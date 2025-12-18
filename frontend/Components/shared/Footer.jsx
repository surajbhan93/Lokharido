import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Smartphone, CreditCard } from "lucide-react";

export default function Footer() {

  // 1. Data-Driven Approach: We store links in arrays so we don't repeat HTML
  const customerService = [
    { name: "Contact Us", href: "/contact" },
    { name: "Track Order", href: "/track" },
    { name: "Return Order", href: "/return" },
    { name: "Cancel Order", href: "/cancel" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "We are Hiring", href: "/careers" },
  ];

  return (
    <footer className="bg-[#1c1717] text-slate-300 text-sm">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* COL 1: CUSTOMER SERVICE */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-4 tracking-wide">CUSTOMER SERVICE</h3>
          <ul className="space-y-2">
            {customerService.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-2 text-xs text-slate-400">
            <p>🚚 15 Days Return Policy*</p>
            <p>💰 Cash On Delivery*</p>
          </div>
        </div>

        {/* COL 2: COMPANY */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-4 tracking-wide">COMPANY</h3>
          <ul className="space-y-2">
            {companyLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COL 3: CONNECT */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-4 tracking-wide">CONNECT WITH US</h3>
          <div className="flex gap-4 mb-6">
            {/* Using Lucide Icons instead of missing SVGs */}
            <a href="#" className="hover:text-yellow-400 transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-yellow-400 transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-yellow-400 transition-colors"><Twitter size={24} /></a>
            <a href="#" className="hover:text-yellow-400 transition-colors"><Linkedin size={24} /></a>
          </div>

          <h3 className="text-yellow-400 font-semibold mb-3 tracking-wide">100% SECURE PAYMENT</h3>
          <div className="flex gap-2 items-center text-slate-500">
            <CreditCard size={30} />
            <span className="text-xs">Visa / Master / UPI / Wallet</span>
          </div>
        </div>

        {/* COL 4: NEWSLETTER */}
        <div>
          <h3 className="text-yellow-400 font-bold mb-4 tracking-wide">KEEP UP TO DATE</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter Email Id"
              className="bg-black/30 border border-slate-600 px-3 py-2 w-full outline-none focus:border-yellow-400 text-white placeholder:text-slate-600"
            />
            <button className="bg-yellow-400 text-black font-bold px-4 hover:bg-yellow-500 transition-colors">
              SUBSCRIBE
            </button>
          </form>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <h2 className="text-lg font-bold text-slate-200 mb-2">LOKHARIDO - THE NEW AGE SHOPPING</h2>
          <p className="text-slate-500 text-xs leading-relaxed max-w-4xl mx-auto">
            Founded in 2025, Lokharido is a lifestyle fashion brand that makes creative,
            distinctive fashion for the contemporary Indian.
          </p>
        </div>
      </div>
    </footer>
  );
};