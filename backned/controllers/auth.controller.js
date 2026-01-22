const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { sendOtp } = require("../utils/sendOtp");

exports.sendOtpController = async (req, res) => {
  try {
    const { mobile } = req.body;
    if (!mobile) {
      return res.status(400).json({ message: "Mobile required" });
    }

    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const expiry = new Date(Date.now() + 5 * 60 * 1000);

    let user = await User.findOne({ mobile });

    if (!user) {
      user = await User.create({ mobile, otp, otpExpiry: expiry });
    } else {
      user.otp = otp;
      user.otpExpiry = expiry;
      await user.save();
    }

    await sendOtp(mobile, otp);
    console.log("OTP GENERATED:", otp);


    res.json({ userExists: !!user.name });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.verifyOtpController = async (req, res) => {
  try {
    const { mobile, otp, name, email, gender } = req.body;

    const user = await User.findOne({ mobile });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.otp !== otp || user.otpExpiry < Date.now()) {
      return res.status(401).json({ message: "Invalid or expired OTP" });
    }

    if (!user.name) {
      user.name = name;
      user.email = email;
      user.gender = gender;
    }

    user.otp = null;
    await user.save();
console.log("User OTP:", user.otp);
console.log("Expiry:", user.otpExpiry);

    const token = jwt.sign(
      { id: user._id, mobile: user.mobile },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
