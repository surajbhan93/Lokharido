const Review = require("../../models/Review.model");

/**
 * =========================
 * ADD REVIEW
 * =========================
 */
exports.addReview = async (req, res) => {
  const { productId, rating, comment } = req.body;

  const review = await Review.create({
    user: req.user.id,
    product: productId,
    rating,
    comment
  });

  res.status(201).json({
    message: "Review added",
    review
  });
};

/**
 * =========================
 * GET REVIEWS OF PRODUCT
 * =========================
 */
exports.getReviews = async (req, res) => {
  const { productId } = req.params;

  const reviews = await Review.find({ product: productId })
    .populate("user", "name");

  res.json(reviews);
};

/**
 * =========================
 * GET AVERAGE RATING
 * =========================
 */
exports.getAverageRating = async (req, res) => {
  const { productId } = req.params;

  const result = await Review.aggregate([
    { $match: { product: new require("mongoose").Types.ObjectId(productId) } },
    {
      $group: {
        _id: "$product",
        avgRating: { $avg: "$rating" },
        totalReviews: { $sum: 1 }
      }
    }
  ]);

  if (result.length === 0) {
    return res.json({
      avgRating: 0,
      totalReviews: 0
    });
  }

  res.json({
    avgRating: result[0].avgRating,
    totalReviews: result[0].totalReviews
  });
};
