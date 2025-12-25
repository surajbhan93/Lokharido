const express = require("express");
const router = express.Router();

const notificationController = require("../controllers/Web/notification.controller");
const { verifyToken } = require("../Middleware/auth.middleware");

// All notification APIs require login
/**
 * @swagger
 * tags:
 *   name: Notifications
 *   description: Email, SMS & order status notification APIs
 */

/**
 * @swagger
 * /api/notifications/email:
 *   post:
 *     summary: Send email notification
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               subject:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Email sent successfully
 */
router.post("/email", verifyToken, notificationController.sendEmail);
/**
 * @swagger
 * /api/notifications/sms:
 *   post:
 *     summary: Send SMS notification
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: SMS sent successfully
 */
router.post("/sms", verifyToken, notificationController.sendSMSNotification);
/**
 * @swagger
 * /api/notifications/order-status:
 *   post:
 *     summary: Send order status notification (Email + SMS)
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               orderId:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Order status notification sent
 */
router.post(
  "/order-status",
  verifyToken,
  notificationController.orderStatusAlert
);

module.exports = router;
