const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/Admin/category.controller");
const { verifyToken } = require("../Middleware/auth.middleware");
const { isAdmin } = require("../Middleware/role.middleware");

// Public
/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: List of categories
 */
router.get("/", categoryController.getCategories);

// Admin only
/**
* @swagger
 * /api/categories:
 *   post:
 *     summary: Create new category (Admin)
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Category created
 */
router.post(
  "/",
  verifyToken,
  isAdmin,
  categoryController.createCategory
);

module.exports = router;
