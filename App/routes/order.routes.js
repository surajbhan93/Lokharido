const express = require("express");
const router = express.Router();

const orderController = require("../controllers/Web/order.controller");
const adminOrderController = require("../controllers/Admin/order.admin.controller");

const { verifyToken } = require("../Middleware/auth.middleware");
const { isAdmin } = require("../Middleware/role.middleware");

// USER
/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management APIs
 */

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Place a new order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               items:
 *                 type: array
 *               totalAmount:
 *                 type: number
 *               address:
 *                 type: string
 *     responses:
 *       201:
 *         description: Order placed successfully
 */
router.post("/", verifyToken, orderController.placeOrder);
/**
 * @swagger
 * /api/orders/my:
 *   get:
 *     summary: Get logged-in user's order history
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User orders list
 */
router.get("/my", verifyToken, orderController.myOrders);
/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Get order details by ID
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order details
 */
router.get("/:id", verifyToken, orderController.orderDetails);
/**
 * @swagger
 * /api/orders/cancel/{id}:
 *   put:
 *     summary: Cancel an order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order cancelled
 */
router.put("/cancel/:id", verifyToken, orderController.cancelOrder);

// ADMIN
/**
 * @swagger
 * /api/orders/status/{id}:
 *   put:
 *     summary: Update order status (Admin)
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Order status updated
 */
router.put(
  "/status/:id",
  verifyToken,
  isAdmin,
  adminOrderController.updateOrderStatus
);

module.exports = router;
