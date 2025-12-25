const User = require("../../models/User.model");
const Product = require("../../models/Product.model");
const Order = require("../../models/Order.model");
const Coupon = require("../../models/Coupon.model");

/**
 * =========================
 * DASHBOARD STATS
 * =========================
 */
exports.dashboardStats = async (req, res) => {
  const users = await User.countDocuments();
  const products = await Product.countDocuments();
  const orders = await Order.countDocuments();

  res.json({
    users,
    products,
    orders
  });
};

/**
 * =========================
 * MANAGE USERS
 * =========================
 */
exports.getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

/**
 * =========================
 * MANAGE PRODUCTS
 * =========================
 */
exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

/**
 * =========================
 * MANAGE ORDERS
 * =========================
 */
exports.getOrders = async (req, res) => {
  const orders = await Order.find()
    .populate("user", "name email")
    .sort({ createdAt: -1 });

  res.json(orders);
};

/**
 * =========================
 * MANAGE COUPONS
 * =========================
 */
exports.getCoupons = async (req, res) => {
  const coupons = await Coupon.find();
  res.json(coupons);
};
