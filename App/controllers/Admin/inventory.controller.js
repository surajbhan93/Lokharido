const Inventory = require("../../models/Inventory.model");

/**
 * =========================
 * CHECK STOCK
 * =========================
 */
exports.checkStock = async (req, res) => {
  const { productId } = req.params;

  const inventory = await Inventory.findOne({ product: productId });

  res.json({
    stock: inventory ? inventory.stock : 0
  });
};

/**
 * =========================
 * UPDATE STOCK (ADMIN)
 * =========================
 */
exports.updateStock = async (req, res) => {
  const { productId, stock } = req.body;

  const inventory = await Inventory.findOneAndUpdate(
    { product: productId },
    { stock },
    { upsert: true, new: true }
  );

  res.json({
    message: "Stock updated",
    inventory
  });
};

/**
 * =========================
 * LOW STOCK ALERT
 * =========================
 */
exports.lowStock = async (req, res) => {
  const items = await Inventory.find({ stock: { $lt: 5 } })
    .populate("product", "title");

  res.json(items);
};
