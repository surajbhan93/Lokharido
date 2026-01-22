export default function ProfilePage() {
  return (
    <div className="max-w-2xl bg-white border rounded-xl shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold">Profile Details</h2>
      </div>
      <form className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm font-medium">First Name</label>
            <input type="text" className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none" defaultValue="John" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Last Name</label>
            <input type="text" className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none" defaultValue="Doe" />
          </div>
        </div>
        
        <div className="space-y-1">
          <label className="text-sm font-medium">Email Address</label>
          <input type="email" className="w-full border p-2.5 rounded-lg bg-gray-50 cursor-not-allowed" defaultValue="john@example.com" disabled />
          <p className="text-[10px] text-gray-400">Email cannot be changed</p>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Phone Number</label>
          <input type="text" className="w-full border p-2.5 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none" defaultValue="+91 9876543210" />
        </div>

        <div className="pt-4">
          <button type="submit" className="bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition w-full md:w-auto">
            SAVE CHANGES
          </button>
        </div>
      </form>
    </div>
  );
}