export default function AddressPage() {
  const addresses = [
    { type: "Home", detail: "H.No 123, Street 5, Near Main Market, New Delhi - 110001", isDefault: true },
    { type: "Office", detail: "Plot 45, Sector 18, Gurugram, Haryana - 122001", isDefault: false },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Manage Addresses</h2>
        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">+ ADD NEW</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses.map((addr, idx) => (
          <div key={idx} className={`p-5 border rounded-xl relative ${addr.isDefault ? 'border-blue-500 bg-blue-50/30' : 'bg-white'}`}>
            {addr.isDefault && <span className="absolute top-4 right-4 bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded">DEFAULT</span>}
            <h4 className="font-bold mb-2 uppercase text-xs text-gray-500">{addr.type}</h4>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">{addr.detail}</p>
            <div className="flex gap-4 border-t pt-4">
              <button className="text-xs font-bold text-blue-600 uppercase">Edit</button>
              <button className="text-xs font-bold text-red-500 uppercase">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}