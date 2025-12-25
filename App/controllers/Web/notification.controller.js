const transporter = require("../../config/nodemailer");
const { sendSMS } = require("../../config/fast2sms");

/**
 * =========================
 * SEND EMAIL
 * =========================
 */
exports.sendEmail = async (req, res) => {
  const { email, subject, message } = req.body;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject,
    text: message
  });

  res.json({
    message: "Email sent successfully"
  });
};

/**
 * =========================
 * SEND SMS
 * =========================
 */
exports.sendSMSNotification = async (req, res) => {
  const { phone, message } = req.body;

  await sendSMS(phone, message);

  res.json({
    message: "SMS sent successfully"
  });
};

/**
 * =========================
 * ORDER STATUS ALERT
 * =========================
 */
exports.orderStatusAlert = async (req, res) => {
  const { email, phone, orderId, status } = req.body;

  // Email
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Order Status Update",
    text: `Your order ${orderId} is now ${status}`
  });

  // SMS
  await sendSMS(
    phone,
    `Your order ${orderId} is now ${status}`
  );

  res.json({
    message: "Order status notification sent"
  });
};
