const express = require("express");
const router = express.Router();

const wishlistController = require("../controllers/Web/wishlist.controller");
const { verifyToken } = require("../Middleware/auth.middleware");

// All wishlist APIs need login
/**
 * @swagger
 * tags:
 *   name: Wishlist
 *   description: Wishlist APIs
 */

/**
 * @swagger
 * /api/wishlist/add:
 *   post:
 *     summary: Add product to wishlist
 *     tags: [Wishlist]
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
 *     responses:
 *       200:
 *         description: Product added to wishlist
 */
router.post("/add", verifyToken, wishlistController.addToWishlist);
/**
 * @swagger
 * /api/wishlist:
 *   get:
 *     summary: Get wishlist items
 *     tags: [Wishlist]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Wishlist items
 */
router.get("/", verifyToken, wishlistController.getWishlist);
/**
 * @swagger
 * /api/wishlist/remove/{id}:
 *   delete:
 *     summary: Remove product from wishlist
 *     tags: [Wishlist]
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
 *         description: Product removed from wishlist
 */
router.delete("/remove/:id", verifyToken, wishlistController.removeFromWishlist);

module.exports = router;
