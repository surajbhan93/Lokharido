const Cart = require("../../models/Cart.model");

/**
 * =========================
 * ADD TO CART
 * =========================
 */
exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  const cartItem = await Cart.create({
    user: req.user.id,
    product: productId,
    quantity: quantity || 1
  });

  res.status(201).json({
    message: "Item added to cart",
    cartItem
  });
};

/**
 * =========================
 * VIEW CART
 * =========================
 */
exports.getCart = async (req, res) => {
  const cart = await Cart.find({ user: req.user.id })
    .populate("product");

  res.json(cart);
};

/**
 * =========================
 * UPDATE QUANTITY
 * =========================
 */
exports.updateCart = async (req, res) => {
  const { cartId, quantity } = req.body;

  const updated = await Cart.findByIdAndUpdate(
    cartId,
    { quantity },
    { new: true }
  );

  res.json({
    message: "Cart updated",
    updated
  });
};

/**
 * =========================
 * REMOVE FROM CART
 * =========================
 */
exports.removeFromCart = async (req, res) => {
  const { id } = req.params;

  await Cart.findByIdAndDelete(id);

  res.json({
    message: "Item removed from cart"
  });
};
