const express = require("express");
const router = express.Router();

const inventoryController = require("../controllers/Admin/inventory.controller");
const { verifyToken } = require("../Middleware/auth.middleware");
const { isAdmin } = require("../Middleware/role.middleware");

// Public
/**
 * @swagger
 * tags:
 *   name: Inventory
 *   description: Inventory & stock management APIs
 */

/**
 * @swagger
 * /api/inventory/check/{productId}:
 *   get:
 *     summary: Check product stock
 *     tags: [Inventory]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Stock status
 */
router.get("/check/:productId", inventoryController.checkStock);

// Admin only
/**
 * @swagger
 * /api/inventory/update:
 *   post:
 *     summary: Update product stock (Admin)
 *     tags: [Inventory]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *               stock:
 *                 type: number
 *     responses:
 *       200:
 *         description: Stock updated successfully
 */
router.post("/update", verifyToken, isAdmin, inventoryController.updateStock);
/**
 * @swagger
 * /api/inventory/low-stock:
 *   get:
 *     summary: Get low stock products (Admin)
 *     tags: [Inventory]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Low stock product list
 */
router.get("/low-stock", verifyToken, isAdmin, inventoryController.lowStock);

module.exports = router;
