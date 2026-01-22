const orders = [
  { id: "#ORD12345", date: "12 Oct 2023", status: "Delivered", total: "₹1,299", items: 2 },
  { id: "#ORD12346", date: "15 Oct 2023", status: "In Transit", total: "₹850", items: 1 },
  { id: "#ORD12347", date: "18 Oct 2023", status: "Cancelled", total: "₹2,100", items: 3 },
];

export default function OrdersPage() {
  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold">My Orders</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-4">Order ID</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Items</th>
              <th className="px-6 py-4">Total</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-medium">{order.id}</td>
                <td className="px-6 py-4 text-gray-600">{order.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 
                    order.status === 'Cancelled' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4">{order.items}</td>
                <td className="px-6 py-4 font-bold">{order.total}</td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:underline text-sm font-medium">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}