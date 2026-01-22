import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#1c1717] text-gray-400 text-sm">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* CUSTOMER SERVICE */}
        <div>
          <h3 className="text-sky-400 font-semibold mb-4">
            CUSTOMER SERVICE
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Track Order</li>
            <li className="hover:text-white cursor-pointer">Return Order</li>
            <li className="hover:text-white cursor-pointer">Cancel Order</li>
          </ul>

          <div className="mt-6 space-y-2 text-gray-300">
            <p>🚚 15 Days Return Policy*</p>
            <p>💰 Cash On Delivery*</p>
          </div>
        </div>

        {/* COMPANY + APP */}
        <div>
          <h3 className="text-sky-400 font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2">
            <a href="/about"> <li className="hover:text-white cursor-pointer ">About Us</li></a>
            <a href="/return-policy"><li className="hover:text-white cursor-pointer py-2">Terms & Conditions</li></a>
            <a href="/privacy"><li className="hover:text-white cursor-pointer  ">Privacy Policy</li></a>
            <a href="#">
              <li className="hover:text-white cursor-pointer py-2">We are Hiring</li>
            </a>
          </ul>

          <h3 className="text-sky-400 font-semibold mt-6">
            DOWNLOAD THE APP
          </h3>
          <div className="relative right-16 flex gap-3 justify-center items-center">
            <a href="https://play.google.com" target="_blank">
              <Image
                src="/footer/googlepay.svg"
                alt="Google Play"
                width={60}
                height={60}
              />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank">
              <Image
                src="/footer/app-store.svg"
                alt="App Store"
                width={60}
                height={60}
              />
            </a>
          </div>
        </div>

        {/* CONNECT WITH US */}
        <div>
          <h3 className="text-sky-400 font-semibold mb-4">
            CONNECT WITH US
          </h3>

          <p className="mb-2">📘 4.7M People like this</p>
          <p className="mb-4">📸 1M People like this</p>

          <div className="flex gap-4 mb-6">
            <a href="https://facebook.com" target="_blank">
              <Image
                src="/footer/facebook.svg"
                alt="Facebook"
                width={22}
                height={22}
                className="hover:brightness-125"
                style={{ filter: "invert(29%) sepia(94%) saturate(748%) hue-rotate(187deg)" }}
              />
            </a>

            <a href="https://instagram.com" target="_blank">
              <Image
                src="/footer/instagram.svg"
                alt="Instagram"
                width={22}
                height={22}
                className="hover:brightness-125 col-start-auto"
                style={{ filter: "invert(32%) sepia(78%) saturate(4986%) hue-rotate(316deg)" }}
              />
            </a>

            <a href="https://twitter.com" target="_blank">
              <Image
                src="/footer/twitter.svg"
                alt="Twitter"
                width={22}
                height={22}
                style={{ filter: "invert(48%) sepia(86%) saturate(325%) hue-rotate(176deg)" }}
              />
            </a>

            <a href="https://pinterest.com" target="_blank">
              <Image
                src="/footer/pinterest.svg"
                alt="Pinterest"
                width={22}
                height={22}
                style={{ filter: "invert(18%) sepia(86%) saturate(7496%) hue-rotate(357deg)" }}
              />
            </a>

            <a href="https://snapchat.com" target="_blank">
              <Image
                src="/footer/snapchat.svg"
                alt="Snapchat"
                width={22}
                height={22}
                style={{ filter: "invert(90%) sepia(95%) saturate(1046%) hue-rotate(360deg)" }}
              />
            </a>

            <a href="https://apple.com" target="_blank">
              <Image
                src="/footer/apple.svg"
                alt="Apple"
                width={22}
                height={22}
                className="invert"
              />
            </a>
          </div>

          <h3 className="text-sky-400 font-semibold mb-3">
            100% SECURE PAYMENT
          </h3>

          <div className="flex flex-wrap gap-4 items-center">
            <Image
              src="/footer/googlepay.svg"
              alt="Google Pay"
              width={42}
              height={26}
              className="transition duration-200 hover:scale-110 hover:brightness-110"
            />

            <Image
              src="/footer/paytm.svg"
              alt="Paytm"
              width={42}
              height={26}
              className="transition duration-200 hover:scale-110 hover:brightness-110"
            />

            <Image
              src="/footer/visa.svg"
              alt="Visa"
              width={42}
              height={26}
              className="transition duration-200 hover:scale-110 hover:brightness-110"
            />

            <Image
              src="/footer/paypal.svg"
              alt="PayPal"
              width={25}
              height={25}
              className="transition duration-200 hover:scale-110 hover:brightness-110"
            />

            <Image
              src="/footer/mastercard.svg"
              alt="Mastercard"
              width={25}
              height={25}
              className="transition duration-200 hover:scale-110 hover:brightness-110"
            />
          </div>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-sky-400 font-bold mb-4">KEEP UP TO DATE</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Email Id"
              className="bg-black border border-gray-600 px-3 py-2 w-full outline-none"
            />
            <button className="bg-sky-400 text-black font-semibold px-4">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* CATEGORY LINKS */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* MEN */}
          <div>
            <h3 className="text-white font-bold mb-4"> Men's Clothing</h3>
            <ul className="space-y-2">
              <li>Top Wear</li>
              <li>New Arrivals</li>
              <li>T-Shirts</li>
              <li>Hoodies & Sweatshirts</li>
              <li>Oversized T-Shirts</li>
              <li>Track Pants</li>
              <li>Jeans</li>
            </ul>
          </div>

          {/* WOMEN */}
          <div>
            <h3 className="text-white font-bold mb-4"> Women's Clothing</h3>
            <ul className="space-y-2">
              <li>Top Wear</li>
              <li>New Arrivals</li>
              <li>T-Shirts</li>
              <li>Fashion Tops</li>
              <li>Dresses</li>
              <li>Hoodies & Sweatshirts</li>
            </ul>
          </div>

          {/* MOBILE */}
          <div>
            <h3 className="text-white font-bold mb-4">Mobile Covers</h3>
            <ul className="space-y-2">
              <li>Apple</li>
              <li>Samsung</li>
              <li>OnePlus</li>
              <li>Xiaomi</li>
              <li>Realme</li>
              <li>Anime Covers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-10 text-gray-400 leading-relaxed">
          <p className="text-white font-semibold mb-3">
            BEWAKOOF® THE NEW AGE ONLINE SHOPPING EXPERIENCE
          </p>
          <p>
            Founded in 2012, Bewakoof® is a lifestyle fashion brand that makes
            creative, distinctive fashion for the contemporary Indian.
            With over 2 million products sold and a strong customer base,
            we focus on innovation, honesty and thoughtful design.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;