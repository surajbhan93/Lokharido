const express = require("express");
const router = express.Router();

const paymentController = require("../controllers/Web/payment.controller");
const { verifyToken } = require("../Middleware/auth.middleware");

// Create Razorpay order
router.post("/create", verifyToken, paymentController.createPayment);

// Verify payment
router.post("/verify", verifyToken, paymentController.verifyPayment);

// Payment status
router.get("/status", verifyToken, paymentController.paymentStatus);

module.exports = router;
