export default function OrderDetails({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold">Order Details</h2>
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase">Delivered</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Items & Summary */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-bold mb-4">Items in Order</h3>
            {[1, 2].map((i) => (
              <div key={i} className="flex gap-4 py-4 border-b last:border-0">
                <div className="w-20 h-20 bg-gray-100 rounded-lg"></div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">Premium Cotton T-Shirt</h4>
                  <p className="text-sm text-gray-500">Size: L | Qty: 1</p>
                  <p className="font-bold mt-1">₹699</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Shipping & Payment Info */}
        <div className="space-y-6">
          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-bold mb-3">Delivery Address</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              John Doe <br />
              H.No 45, Golden Heights, <br />
              New Delhi, 110001 <br />
              Phone: +91 9876543210
            </p>
          </div>

          <div className="bg-gray-900 text-white border rounded-xl p-6">
            <h3 className="font-bold mb-4">Payment Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><span>₹1,398</span></div>
              <div className="flex justify-between text-green-400"><span>Discount</span><span>-₹100</span></div>
              <div className="flex justify-between"><span>Shipping</span><span className="text-green-400">FREE</span></div>
              <div className="border-t border-gray-700 pt-2 mt-2 flex justify-between font-bold text-lg text-yellow-400">
                <span>Total</span><span>₹1,298</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}