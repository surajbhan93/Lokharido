const Product = require("../../models/Product.model");

exports.productListing = async (req, res) => {
  try {
    let {
      category,
      search,
      minPrice,
      maxPrice,
      size,
      color,
      sort,
      page = 1,
      limit = 12
    } = req.query;

    page = Number(page);
    limit = Number(limit);

    let filter = { isActive: true };

    // CATEGORY
    if (category) filter.category = category;

    // SEARCH (Bewakoof style)
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { brand: { $regex: search, $options: "i" } }
      ];
    }

    // PRICE FILTER
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = minPrice;
      if (maxPrice) filter.price.$lte = maxPrice;
    }

    // SIZE & COLOR
    if (size) filter.sizes = size;
    if (color) filter.colors = color;

    // SORTING
    let sortBy = {};
    if (sort === "price_low") sortBy.price = 1;
    if (sort === "price_high") sortBy.price = -1;
    if (sort === "newest") sortBy.createdAt = -1;
    if (sort === "rating") sortBy.rating = -1;

    const totalProducts = await Product.countDocuments(filter);

    const products = await Product.find(filter)
      .select("title price mrp discountPercent thumbnail rating brand")
      .sort(sortBy)
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json({
      success: true,
      pagination: {
        totalProducts,
        totalPages: Math.ceil(totalProducts / limit),
        currentPage: page
      },
      products
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.productDetails = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product || !product.isActive) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      success: true,
      product
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
