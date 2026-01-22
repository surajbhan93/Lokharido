export default function WalletPage() {
  return (
    <div className="space-y-6">
      {/* Wallet Balance Card */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-2xl text-white shadow-lg">
        <p className="opacity-80 text-sm uppercase tracking-wider">Available Balance</p>
        <h2 className="text-4xl font-bold mt-2">₹4,250.00</h2>
        <div className="mt-6 flex gap-4">
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold text-sm">ADD MONEY</button>
          <button className="bg-blue-500 bg-opacity-30 border border-white border-opacity-30 px-6 py-2 rounded-lg font-bold text-sm">REDEEM VOUCHER</button>
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-white border rounded-xl p-6">
        <h3 className="font-bold text-lg mb-4">Recent Transactions</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex justify-between items-center py-3 border-b last:border-0">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">↓</div>
                <div>
                  <p className="font-medium">Added to Wallet</p>
                  <p className="text-xs text-gray-500">20 Oct 2023 • UPI Payment</p>
                </div>
              </div>
              <p className="font-bold text-green-600">+ ₹500</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}