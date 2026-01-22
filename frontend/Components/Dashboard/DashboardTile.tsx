"use client";

import React from "react";
import {
  ShoppingBag,
  Wallet,
  CreditCard,
  MapPin,
  User,
  LifeBuoy,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  orders: <ShoppingBag />,
  payments: <CreditCard />,
  wallet: <Wallet />,
  address: <MapPin />,
  profile: <User />,
  support: <LifeBuoy />,
};

export default function Tile({
  title,
  desc,
  icon,
  link,
}: {
  title: string;
  desc: string;
  icon: string;
  link: string;
}) {
  return (
    <Link href={link}>
      <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
        <div className="mb-4 text-yellow-500">
          {iconMap[icon]}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </Link>
  );
}
