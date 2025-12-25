const Coupon = require("../../models/Coupon.model");

/**
 * =========================
 * VALIDATE COUPON
 * =========================
 */
exports.validateCoupon = async (req, res) => {
  const { code } = req.body;

  const coupon = await Coupon.findOne({ code, isActive: true });
  if (!coupon) {
    return res.status(400).json({ message: "Invalid coupon" });
  }

  res.json({
    message: "Coupon valid",
    discountPercent: coupon.discountPercent
  });
};

/**
 * =========================
 * APPLY COUPON
 * =========================
 */
exports.applyCoupon = async (req, res) => {
  const { code, cartTotal } = req.body;

  const coupon = await Coupon.findOne({ code, isActive: true });
  if (!coupon) {
    return res.status(400).json({ message: "Invalid coupon" });
  }

  const discount = (cartTotal * coupon.discountPercent) / 100;
  const finalAmount = cartTotal - discount;

  res.json({
    message: "Coupon applied",
    discount,
    finalAmount
  });
};

/**
 * =========================
 * REMOVE COUPON
 * =========================
 */
exports.removeCoupon = async (req, res) => {
  res.json({
    message: "Coupon removed"
  });
};
