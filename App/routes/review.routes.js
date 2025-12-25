const express = require("express");
const router = express.Router();

const reviewController = require("../controllers/Web/review.controller");
const { verifyToken } = require("../Middleware/auth.middleware");

// Add review (login required)
/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Product review & rating APIs
 */

/**
 * @swagger
 * /api/reviews/add:
 *   post:
 *     summary: Add a product review
 *     tags: [Reviews]
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
 *               rating:
 *                 type: number
 *               comment:
 *                 type: string
 *     responses:
 *       201:
 *         description: Review added successfully
 */
router.post("/add", verifyToken, reviewController.addReview);
/**
 * @swagger
 * /api/reviews/{productId}:
 *   get:
 *     summary: Get reviews of a product
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product reviews list
 */
// Get reviews of a product
router.get("/:productId", reviewController.getReviews);
/**
 * @swagger
 * /api/reviews/average/{productId}:
 *   get:
 *     summary: Get average rating of a product
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Average rating value
 */
// Get average rating
router.get("/average/:productId", reviewController.getAverageRating);

module.exports = router;
