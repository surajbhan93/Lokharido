const Wishlist = require("../../models/Wishlist.model");

/**
 * =========================
 * ADD TO WISHLIST
 * =========================
 */
exports.addToWishlist = async (req, res) => {
  const { productId } = req.body;

  const item = await Wishlist.create({
    user: req.user.id,
    product: productId
  });

  res.status(201).json({
    message: "Added to wishlist",
    item
  });
};

/**
 * =========================
 * VIEW WISHLIST
 * =========================
 */
exports.getWishlist = async (req, res) => {
  const wishlist = await Wishlist.find({ user: req.user.id })
    .populate("product");

  res.json(wishlist);
};

/**
 * =========================
 * REMOVE FROM WISHLIST
 * =========================
 */
exports.removeFromWishlist = async (req, res) => {
  const { id } = req.params;

  await Wishlist.findByIdAndDelete(id);

  res.json({
    message: "Removed from wishlist"
  });
};
