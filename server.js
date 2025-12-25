const dotenv = require("dotenv");
const express = require("express");


const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./App/routes/auth.routes");
const categoryRoutes = require("./App/routes/category.routes");
const cartRoutes = require("./App/routes/cart.routes");
const wishlistRoutes = require("./App/routes/wishlist.routes");
const addressRoutes = require("./App/routes/address.routes");
const reviewRoutes = require("./App/routes/review.routes");
const couponRoutes = require("./App/routes/coupon.routes");
const inventoryRoutes = require("./App/routes/inventory.routes");
const orderRoutes = require("./App/routes/order.routes");
const adminRoutes = require("./App/routes/admin.routes");
const notificationRoutes = require("./App/routes/notification.routes");
const miscRoutes = require("./App/routes/misc.routes");
// const paymentRoutes = require("./App/routes/payment.routes");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./App/config/swagger");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);

// product 
app.use("/api/products", require("./App/routes/product.routes"));
app.use("/api/categories", categoryRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/orders", orderRoutes);
// app.use("/api/payment", paymentRoutes);
app.use("/api/admin", adminRoutes);
// console.log("ENV TEST:", process.env.RAZORPAY_KEY_ID);
app.use("/api/notifications", notificationRoutes);
app.use("/api/misc", miscRoutes);
app.get("/", (req, res) => res.send("Server is running!"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
