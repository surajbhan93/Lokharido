const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product"
        },
        quantity: Number,
        price: Number
      }
    ],
    totalAmount: Number,
    address: String,
    status: {
      type: String,
      default: "placed" // placed, shipped, delivered, cancelled
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
