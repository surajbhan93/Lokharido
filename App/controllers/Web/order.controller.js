const Order = require("../../models/Order.model");

/**
 * =========================
 * PLACE ORDER
 * =========================
 */
exports.placeOrder = async (req, res) => {
  const { items, totalAmount, address } = req.body;

  const order = await Order.create({
    user: req.user.id,
    items,
    totalAmount,
    address
  });

  res.status(201).json({
    message: "Order placed successfully",
    order
  });
};

/**
 * =========================
 * MY ORDERS (HISTORY)
 * =========================
 */
exports.myOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id })
    .sort({ createdAt: -1 });

  res.json(orders);
};

/**
 * =========================
 * ORDER DETAILS
 * =========================
 */
exports.orderDetails = async (req, res) => {
  const order = await Order.findById(req.params.id)
    .populate("items.product", "title price");

  res.json(order);
};

/**
 * =========================
 * CANCEL ORDER
 * =========================
 */
exports.cancelOrder = async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status: "cancelled" },
    { new: true }
  );

  res.json({
    message: "Order cancelled",
    order
  });
};
