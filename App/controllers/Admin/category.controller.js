const Category = require("../../models/Category.model");

/**
 * =========================
 * GET ALL CATEGORIES
 * =========================
 * Public API
 */
exports.getCategories = async (req, res) => {
  const categories = await Category.find().sort({ name: 1 });
  res.json(categories);
};

/**
 * =========================
 * CREATE CATEGORY (Admin)
 * =========================
 */
exports.createCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Category name is required" });
  }

  const category = await Category.create({ name });

  res.status(201).json({
    message: "Category created",
    category
  });
};
