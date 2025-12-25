const axios = require("axios");

exports.sendSMS = async (phone, message) => {
  await axios.post(
    "https://www.fast2sms.com/dev/bulkV2",
    {
      route: "q",
      message,
      numbers: phone
    },
    {
      headers: {
        authorization: process.env.FAST2SMS_API_KEY
      }
    }
  );
};
