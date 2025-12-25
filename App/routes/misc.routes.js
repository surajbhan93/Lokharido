const express = require("express");
const router = express.Router();

const miscController = require("../controllers/Web/misc.controller");
const { verifyToken } = require("../Middleware/auth.middleware");

// Search suggestions
/**
 * @swagger
 * tags:
 *   name: Misc
 *   description: Miscellaneous helper APIs
 */

/**
 * @swagger
 * /api/misc/search-suggestions:
 *   get:
 *     summary: Get search suggestions
 *     tags: [Misc]
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 *         description: Search keyword
 *     responses:
 *       200:
 *         description: Search suggestions list
 */
router.get("/search-suggestions", miscController.searchSuggestions);
/**
 * @swagger
 * /api/misc/check-pincode:
 *   get:
 *     summary: Check pincode serviceability
 *     tags: [Misc]
 *     parameters:
 *       - in: query
 *         name: pincode
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pincode serviceability status
 */

// Pincode check
router.get("/check-pincode", miscController.checkPincode);
/**
 * @swagger
 * /api/misc/return-refund:
 *   post:
 *     summary: Request return or refund
 *     tags: [Misc]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *               reason:
 *                 type: string
 *     responses:
 *       200:
 *         description: Return/Refund request submitted
 */

// Return / Refund (login required)
router.post("/return-refund", verifyToken, miscController.returnRefund);

module.exports = router;
