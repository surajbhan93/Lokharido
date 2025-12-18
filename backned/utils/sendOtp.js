const axios = require("axios");

exports.sendOtp = async (mobile, otp) => {
  const options = {
    method: "POST",
    url: "https://www.fast2sms.com/dev/bulkV2",
    headers: {
      authorization: process.env.FAST2SMS_API_KEY,
      "Content-Type": "application/json",
    },
    data: {
      route: "otp",
      numbers: mobile,
      variables_values: otp,
    },
  };

  await axios(options);
};
