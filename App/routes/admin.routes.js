const express = require("express");
const router = express.Router();

const adminController = require("../controllers/Admin/admin.controller");
const { verifyToken } = require("../Middleware/auth.middleware");
const { isAdmin } = require("../Middleware/role.middleware");

// All Admin APIs (Protected)
/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin panel APIs
 */

/**
 * @swagger
 * /api/admin/dashboard:
 *   get:
 *     summary: Get admin dashboard stats
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard statistics
 */
router.get("/dashboard", verifyToken, isAdmin, adminController.dashboardStats);
/**
 * @swagger
 * /api/admin/users:
 *   get:
 *     summary: Get all users (Admin)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 */
router.get("/users", verifyToken, isAdmin, adminController.getUsers);
/**
 * @swagger
 * /api/admin/products:
 *   get:
 *     summary: Get all products (Admin)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of products
 */
router.get("/products", verifyToken, isAdmin, adminController.getProducts);
/**
 * @swagger
 * /api/admin/orders:
 *   get:
 *     summary: Get all orders (Admin)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of orders
 */
router.get("/orders", verifyToken, isAdmin, adminController.getOrders);
/**
 * @swagger
 * /api/admin/coupons:
 *   get:
 *     summary: Get all coupons (Admin)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of coupons
 */
router.get("/coupons", verifyToken, isAdmin, adminController.getCoupons);

module.exports = router;
