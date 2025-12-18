import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/shared/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />  {/* <--- Add this here */}
        {children}
      </body>
    </html>
  );
}