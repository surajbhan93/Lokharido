const Product = require("../../models/Product.model");
const Order = require("../../models/Order.model");

/**
 * =========================
 * SEARCH SUGGESTIONS
 * =========================
 */
exports.searchSuggestions = async (req, res) => {
  const { q } = req.query;

  if (!q) return res.json([]);

  const products = await Product.find({
    title: { $regex: q, $options: "i" }
  })
    .select("title")
    .limit(5);

  res.json(products);
};

/**
 * =========================
 * PINCODE SERVICEABILITY
 * =========================
 */
exports.checkPincode = async (req, res) => {
  const { pincode } = req.query;

  // Dummy logic (India)
  const serviceable = pincode && pincode.length === 6;

  res.json({
    pincode,
    serviceable
  });
};

/**
 * =========================
 * RETURN / REFUND REQUEST
 * =========================
 */
exports.returnRefund = async (req, res) => {
  const { orderId, reason } = req.body;

  const order = await Order.findById(orderId);
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  order.status = "return_requested";
  order.returnReason = reason;
  await order.save();

  res.json({
    message: "Return / refund request submitted"
  });
};
