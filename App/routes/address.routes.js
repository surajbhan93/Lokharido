const express = require("express");
const router = express.Router();

const addressController = require("../controllers/Web/address.controller");
const { verifyToken } = require("../Middleware/auth.middleware");

// All address APIs require login
/**
 * @swagger
 * tags:
 *   name: Address
 *   description: User address (shipping) APIs
 */

/**
 * @swagger
 * /api/address/add:
 *   post:
 *     summary: Add new address
 *     tags: [Address]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               phone:
 *                 type: string
 *               addressLine:
 *                 type: string
 *               city:
 *                 type: string
 *               state:
 *                 type: string
 *               pincode:
 *                 type: string
 *     responses:
 *       201:
 *         description: Address added successfully
 */
router.post("/add", verifyToken, addressController.addAddress);
/**
 * @swagger
 * /api/address:
 *   get:
 *     summary: Get saved addresses
 *     tags: [Address]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of user addresses
 */
router.get("/", verifyToken, addressController.getAddresses);
/**
 * @swagger
 * /api/address/update/{id}:
 *   put:
 *     summary: Update address
 *     tags: [Address]
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
 *     responses:
 *       200:
 *         description: Address updated
 */
router.put("/update/:id", verifyToken, addressController.updateAddress);
/**
 * @swagger
 * /api/address/delete/{id}:
 *   delete:
 *     summary: Delete address
 *     tags: [Address]
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
 *         description: Address deleted
 */
router.delete("/delete/:id", verifyToken, addressController.deleteAddress);

module.exports = router;
