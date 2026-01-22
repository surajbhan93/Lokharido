"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Smartphone, Mail, MapPin } from "lucide-react"; // Using Lucide icons for cleaner look if you have them, otherwise fallback to images

// ==========================================
// 1. DATA CONFIGURATION (The Source of Truth)
// ==========================================

const CUSTOMER_SERVICE = [
  { name: "Contact Us", link: "/contact" },
  { name: "Track Order", link: "/orders" },
  { name: "Return Order", link: "/orders/return" },
  { name: "Cancel Order", link: "/orders/cancel" },
];

const COMPANY_LINKS = [
  { name: "About Us", link: "/about" },
  { name: "Terms & Conditions", link: "/terms" },
  { name: "Privacy Policy", link: "/privacy" },
  { name: "We are Hiring", link: "/careers" },
  { name: "Lokharido Blog", link: "/blog" },
];

// MASSIVE CATEGORY LIST (Mimicking the screenshot)
// We will auto-generate links: "Men's T-Shirts" -> "/shop/mens-t-shirts"
const SITE_MAP = [
  {
    title: "MEN'S CLOTHING",
    links: [
      "Top Wear", "Men's New Arrivals", "Men's T-Shirts", "Men's Hoodies & Sweatshirts",
      "Oversized T-Shirts for Men", "Men's Long Sleeve T-shirts", "Men's White T-shirts",
      "Men's Crew Neck T-shirts", "Men's Half Sleeve T-Shirts", "Men's Printed T-shirts",
      "Men's Plain T-shirts", "Men's Vests", "Men's Polo T-Shirts", "Men's Kurtas",
      "Men's Combo T-Shirts", "Men's Shirts", "Men's Nightwear", "Men's Plus Size Store",
      "Bottom Wear", "Men's Pajamas", "Men's Boxer Shorts", "Men's Shorts",
      "Men's Track Pants", "Men's Jeans", "Men's Joggers", "Men's Cargo Pants"
    ]
  },
  {
    title: "WOMEN'S CLOTHING",
    links: [
      "Women's Top Wear", "Women's New Arrivals", "Women's T-Shirts", "Women's Fashion Tops",
      "Women's Loose T-shirts", "Women's Tank Tops", "Women's Hoodies & Sweatshirts",
      "Women's Dresses", "Women's 3/4 Sleeve T-Shirts", "Women's Kurtis",
      "Women's Combo T-Shirts", "Women's Nightwear", "Women's Plus Size Store",
      "Women's Bottom Wear", "Women's Pajamas", "Women's Boxer Shorts", "Women's Jeans",
      "Women's Jeggings", "Women's Shorts", "Women's Track Pants"
    ]
  },
  {
    title: "MOBILE COVERS",
    links: [
      "Apple", "Realme", "Samsung", "Xiaomi", "Oneplus", "Vivo", "Oppo", "Poco", "Anime Mobile Covers"
    ]
  },
  {
    title: "FEATURED & BAGS",
    links: [
      "Laptop Bags", "Small Backpacks", "Marvel T-Shirts", "Disney T-Shirts",
      "Avengers T-Shirts", "Star Wars T-Shirts", "Batman T-Shirts",
      "Superman T-Shirts", "Joker T-Shirts", "Game of Thrones T-Shirts"
    ]
  }
];

// SOCIAL MEDIA DATA
const SOCIAL_LINKS = [
  { name: "Facebook", src: "/footer/facebook.svg", url: "https://facebook.com" },
  { name: "Instagram", src: "/footer/instagram.svg", url: "https://instagram.com" },
  { name: "Twitter", src: "/footer/twitter.svg", url: "https://twitter.com" },
  { name: "Snapchat", src: "/footer/snapchat.svg", url: "https://snapchat.com" },
  { name: "Pinterest", src: "/footer/pinterest.svg", url: "https://pinterest.com" },
];

// ==========================================
// 2. THE COMPONENT
// ==========================================

const Footer = () => {

  // Helper to slugify links: "Men's T-Shirts" -> "mens-t-shirts"
  const getLink = (text: string) => `/shop/${text.toLowerCase().replace(/['&]/g, '').replace(/\s+/g, '-')}`;

  return (
    <footer className="bg-[#1c1717] text-slate-400 text-sm font-sans">

      {/* --- TOP SECTION: SERVICE & SOCIALS --- */}
      <div className="max-w-[1400px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800">

        {/* 1. BRAND & APP */}
        <div>
          <h2 className="text-2xl font-black text-white mb-6 tracking-tighter">LOKHARIDO®</h2>
          <p className="mb-6 text-sm leading-relaxed">
            The new age online shopping experience. Founded in 2025, we bring creative fashion to the contemporary Indian.
          </p>

          <h3 className="text-lok-blue font-bold mb-4 text-xs tracking-widest">DOWNLOAD THE APP</h3>
          <div className="flex gap-3 mt-4">
            {/* Google Play Store Badge */}
            <Link href="#" className="hover:scale-105 transition-transform">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                width={135}
                height={40}
                className="h-6 w-auto"
              />
            </Link>

            {/* Apple App Store Badge (Matching Style) */}
            <Link href="#" className="hover:scale-105 transition-transform">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the App Store"
                width={100}
                height={40}
                className="h-6 w-auto"
              />
            </Link>
          </div>
        </div>

        {/* 2. CUSTOMER SUPPORT */}
        <div>
          <h3 className="text-lok-blue font-bold mb-6 text-sm tracking-widest">CUSTOMER SERVICE</h3>
          <ul className="space-y-3">
            {CUSTOMER_SERVICE.map((item) => (
              <li key={item.name}>
                <Link href={item.link} className="hover:text-white transition-colors flex items-center gap-2">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-3 text-white/80">
            <p className="flex items-center gap-2"><span className="text-xl">↺</span> 15 Days Return Policy*</p>
            <p className="flex items-center gap-2"><span className="text-xl">₹</span> Cash On Delivery Available*</p>
          </div>
        </div>

        {/* 3. COMPANY */}
        <div>
          <h3 className="text-lok-blue font-bold mb-6 text-sm tracking-widest">COMPANY</h3>
          <ul className="space-y-3">
            {COMPANY_LINKS.map((item) => (
              <li key={item.name}>
                <Link href={item.link} className="hover:text-white transition-colors">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. CONNECT & SUBSCRIBE */}
        <div>
          <h3 className="text-lok-blue font-bold mb-6 text-sm tracking-widest">CONNECT WITH US</h3>
          <form className="flex mb-6" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter Email Id"
              className="bg-transparent border-b border-gray-600 py-2 w-full outline-none focus:border-lok-blue text-white placeholder-gray-600"
            />
            <button className="text-sky-400 font-bold text-xs ml-2 hover:text-white uppercase">
              Subscribe
            </button>
          </form>

          <div className="flex gap-4 mb-6">
            {SOCIAL_LINKS.map((social) => (
              <a key={social.name} href={social.url} target="_blank" className="hover:scale-110 transition-transform bg-white/10 p-2 rounded-full">
                {/* Using simple image tag for icons to ensure they render per your assets */}
                <Image src={social.src} alt={social.name} width={18} height={18} className="invert" />
              </a>
            ))}
          </div>

          {/* PAYMENT ICONS SECTION
  - Replaced local black/white SVGs with official colored logos from CDN.
  - Added 'bg-white' and 'px-2' to make them pop against the dark footer.
*/}
          <div className="flex flex-wrap gap-1 items-center mt-4">

            {/* Google Pay */}
            <div className="bg-white px-2 py-1 rounded shadow-sm">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg"
                alt="Google Pay"
                width={34}
                height={16}
                className="w-auto h-3"
              />
            </div>

            {/* Visa (Blue/Yellow) */}
            <div className="bg-white px-2 py-1 rounded shadow-sm">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                alt="Visa"
                width={34}
                height={16}
                className="w-auto h-3"
              />
            </div>

            {/* Mastercard (Red/Orange) */}
            <div className="bg-white px-2 py-1 rounded shadow-sm">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="Mastercard"
                width={34}
                height={16}
                className="w-auto h-3"
              />
            </div>

            {/* PayPal (Blue/Light Blue) */}
            <div className="bg-white px-2 py-1 rounded shadow-sm">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                width={34}
                height={16}
                className="w-auto h-3"
              />
            </div>

            {/* Paytm (Standard Blue) */}
            <div className="bg-white px-2 py-1 rounded shadow-sm">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg"
                alt="Paytm"
                width={34}
                height={16}
                className="w-auto h-3"
              />
            </div>

          </div>
        </div>
      </div>


      {/* --- MIDDLE SECTION: MASSIVE LINKS (The SEO Juice) --- */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 border-b border-gray-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {SITE_MAP.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-bold mb-4 text-xs tracking-widest">{section.title}</h3>
              <ul className="space-y-1.5">
                {section.links.map((linkText) => (
                  <li key={linkText}>
                    <Link
                      href={getLink(linkText)}
                      className="text-[11px] md:text-xs hover:text-lok-blue transition-colors text-slate-500"
                    >
                      {linkText}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>


      {/* --- BOTTOM SECTION: SEO TEXT (The Lokharido Story) --- */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 text-[11px] md:text-xs leading-relaxed text-slate-500 space-y-6 text-justify">

        <h2 className="text-lg font-bold text-white mb-2">LOKHARIDO® - THE NEW AGE ONLINE SHOPPING EXPERIENCE</h2>

        <div>
          <h3 className="text-white font-bold mb-1">Our Story</h3>
          <p>
            Founded in 2025, <strong>Lokharido®</strong> is a lifestyle fashion brand that makes creative, distinctive fashion for the trendy, contemporary Indian. Lokharido® was created on the principle of creating impact through innovation, honesty, and thoughtfulness. With a growing team of passionate innovators and thousands of products sold to date, we like to experiment freely. This allows us to balance creativity and relatability in our innovative designs. Our range of products is always fresh and up-to-date. We are vertically integrated, manufacturing our own products to cut out the middleman. This direct-to-consumer model allows us to create high-quality fashion at affordable prices.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-1">Online Shopping at Lokharido® is Hassle-Free</h3>
          <p>
            Online Shopping has always been a fun and exciting task for most, and more so when the shopping mall is none other than your own house. Cut to today's time, you can do all this from the comfort of your home while enjoying many online shopping offers, right from amazing deals and discounts to one of the most robust user interfaces among online shopping sites in India. With many shopping filters to make your shopping experience truly hassle-free, this is what we call Lokharido.com.
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-1">The Place for Men's and Women's Fashion</h3>
          <p>
            Lokharido® is THE place to be when it comes to the coolest in online fashion. We offer you fine, high-quality merchandise. Go ahead and indulge in a bit of online shopping for men's and women's fashion. Browse through exciting categories from men's fashion to basic men's clothing as well as a wide variety in women's wear, including dresses, tops, and accessories. Fill up your carts and get fast home delivery for all orders. All of this, topped with our exclusive online shopping offers, makes for an exciting, irresistible, and uber-cool combo!
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-1">100% Secure Payment & Trust</h3>
          <p>
            Choose your product, get it ordered online, and we ensure that its delivery happens right at your doorstep anywhere in India. You just need to take care of the payment for the product from the comfort of your home, while we ensure free shipping on eligible orders. For any second thoughts after purchase, we have a robust return policy in place. For your online shopping experience to be safe and risk-free, we offer Cash On Delivery (COD) facility too. So you don't have to worry anymore about your hard-earned money being stuck when you buy clothes online at Lokharido.com.
          </p>
        </div>

        <div className="pt-6 border-t border-gray-800 text-center">
          <p>© 2025 Lokharido® - All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;