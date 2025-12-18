import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}