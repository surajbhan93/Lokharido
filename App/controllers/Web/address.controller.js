const Address = require("../../models/Address.model");

/**
 * =========================
 * ADD ADDRESS
 * =========================
 */
exports.addAddress = async (req, res) => {
  const address = await Address.create({
    user: req.user.id,
    ...req.body
  });

  res.status(201).json({
    message: "Address added successfully",
    address
  });
};

/**
 * =========================
 * GET SAVED ADDRESSES
 * =========================
 */
exports.getAddresses = async (req, res) => {
  const addresses = await Address.find({ user: req.user.id });
  res.json(addresses);
};

/**
 * =========================
 * UPDATE ADDRESS
 * =========================
 */
exports.updateAddress = async (req, res) => {
  const { id } = req.params;

  const updatedAddress = await Address.findByIdAndUpdate(
    id,
    req.body,
    { new: true }
  );

  res.json({
    message: "Address updated successfully",
    updatedAddress
  });
};

/**
 * =========================
 * DELETE ADDRESS
 * =========================
 */
exports.deleteAddress = async (req, res) => {
  const { id } = req.params;

  await Address.findByIdAndDelete(id);

  res.json({
    message: "Address deleted successfully"
  });
};
