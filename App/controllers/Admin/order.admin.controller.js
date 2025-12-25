const Order = require("../../models/Order.model");

/**
 * =========================
 * UPDATE ORDER STATUS
 * =========================
 */
exports.updateOrderStatus = async (req, res) => {
  const { status } = req.body;

  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );

  res.json({
    message: "Order status updated",
    order
  });
};
