const express = require("express");
const router = express.Router();

const couponController = require("../controllers/Web/coupon.controller");

/**
 * @swagger
 * tags:
 *   name: Coupons
 *   description: Coupon & offer APIs
 */

/**
 * @swagger
 * /api/coupons/validate:
 *   post:
 *     summary: Validate coupon code
 *     tags: [Coupons]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *     responses:
 *       200:
 *         description: Coupon is valid
 *       400:
 *         description: Invalid coupon
 */
router.post("/validate", couponController.validateCoupon);
/**
 * @swagger
 * /api/coupons/apply:
 *   post:
 *     summary: Apply coupon on cart total
 *     tags: [Coupons]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               cartTotal:
 *                 type: number
 *     responses:
 *       200:
 *         description: Coupon applied successfully
 */
router.post("/apply", couponController.applyCoupon);
/**
 * @swagger
 * /api/coupons/remove:
 *   post:
 *     summary: Remove applied coupon
 *     tags: [Coupons]
 *     responses:
 *       200:
 *         description: Coupon removed
 */
router.post("/remove", couponController.removeCoupon);

module.exports = router;
