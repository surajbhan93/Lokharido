const express = require("express");
const router = express.Router();

const {
  productListing,
  productDetails
} = require("../controllers/Web/product.controller");

const {
  addProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/Admin/product.controller");

const { verifyToken } = require("../Middleware/auth.middleware");
const { isAdmin } = require("../Middleware/role.middleware");

// USER
/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product listing & management APIs
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products
 */
router.get("/", productListing);
/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product details
 */
router.get("/:id", productDetails);

// ADMIN
/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Add new product (Admin)
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               price:
 *                 type: number
 *               mrp:
 *                 type: number
 *               category:
 *                 type: string
 *     responses:
 *       201:
 *         description: Product added
 */

router.post("/", verifyToken, isAdmin, addProduct);
/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Update product (Admin)
 *     tags: [Products]
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
 *         description: Product updated
 */
router.put("/:id", verifyToken, isAdmin, updateProduct);
/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Delete product (Admin)
 *     tags: [Products]
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
 *         description: Product deleted
 */
router.delete("/:id", verifyToken, isAdmin, deleteProduct);

module.exports = router;
