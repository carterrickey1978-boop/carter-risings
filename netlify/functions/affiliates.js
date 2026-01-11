const mongoose = require("mongoose");

const affiliateSchema = new mongoose.Schema({
  name: String,
  email: String,
  status: { type: String, default: "pending" },
  code: String
});

const Affiliate = mongoose.model("Affiliate", affiliateSchema);

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);

    const { name, email } = JSON.parse(event.body);
    const code = "CR-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    const newAff = new Affiliate({ name, email, code });
    await newAff.save();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Application received - awaiting approval!" })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ message: "Error saving" }) };
  }
};
