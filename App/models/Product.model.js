const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true }, // SEO
    brand: { type: String, default: "Lokharido" },

    price: { type: Number, required: true },
    mrp: { type: Number, required: true },
    discountPercent: { type: Number },

    category: { type: String, index: true },
    subCategory: { type: String },

    sizes: [String],      // ["S","M","L","XL"]
    colors: [String],     // ["Black","White"]

    thumbnail: String,    // listing image
    images: [String],     // detail page images

    rating: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 },

    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
