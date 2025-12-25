const razorpay = require("../../config/razorpay");
const crypto = require("crypto");

/**
 * =========================
 * CREATE PAYMENT
 * =========================
 */
exports.createPayment = async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100, // INR → paisa
    currency: "INR",
    receipt: "receipt_" + Date.now()
  };

  const order = await razorpay.orders.create(options);

  res.json({
    orderId: order.id,
    amount: order.amount,
    currency: order.currency,
    key: process.env.RAZORPAY_KEY_ID
  });
};

/**
 * =========================
 * VERIFY PAYMENT
 * =========================
 */
exports.verifyPayment = async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature
  } = req.body;

  const body =
    razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    return res.json({
      message: "Payment verified successfully",
      status: "success"
    });
  }

  res.status(400).json({
    message: "Payment verification failed",
    status: "failed"
  });
};

/**
 * =========================
 * PAYMENT STATUS
 * =========================
 */
exports.paymentStatus = async (req, res) => {
  const { status } = req.query;

  res.json({
    paymentStatus: status || "pending"
  });
};
