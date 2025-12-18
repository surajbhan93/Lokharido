interface User {
  name?: string;
  email?: string;
  mobile?: string;
}

interface ProfileCardProps {
  user?: User | null;
}

export default function ProfileCard({ user }: ProfileCardProps) {
  return (
    <div className="bg-[#FFF9C4] p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center border border-yellow-200">
      <div className="space-y-1 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-tight">
          {user?.name || "User Name"}
        </h2>

        <p className="text-gray-600">
          {user?.email || "user@email.com"}
        </p>

        <p className="text-gray-600 font-medium">
          {user?.mobile || "+91 0000000000"}
        </p>
      </div>

      <button className="mt-4 md:mt-0 bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-2.5 rounded-lg font-bold transition-all shadow-sm">
        EDIT PROFILE
      </button>
    </div>
  );
}
