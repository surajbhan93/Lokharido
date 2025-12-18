import ProfileCard from "@/Components/Dashboard/ProfileCard";
import Tile from "@/Components/Dashboard/DashboardTile";
import { getUserFromToken } from "@/lib/auth";
import { User } from "@/types/user";

export default async function DashboardPage() {
  const user: User | null = await getUserFromToken();

  const tiles = [
    { title: "My Orders", desc: "View, Modify And Track Orders", icon: "orders", link: "/dashboard/orders" },
    { title: "My Payments", desc: "View And Modify Payment Methods", icon: "payments", link: "/dashboard/payments" },
    { title: "My Wallet", desc: "Wallet History And Gift Cards", icon: "wallet", link: "/dashboard/wallet" },
    { title: "My Addresses", desc: "Edit, Add Or Remove Addresses", icon: "address", link: "/dashboard/addresses" },
    { title: "My Profile", desc: "Edit Personal Info", icon: "profile", link: "/dashboard/profile" },
    { title: "Help & Support", desc: "Reach Out To Us", icon: "support", link: "/support" },
  ];

  return (
    <div className="space-y-8">
      <ProfileCard user={user} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiles.map((tile, index) => (
          <Tile key={index} {...tile} />
        ))}
      </div>
    </div>
  );
}
