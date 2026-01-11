const mongoose = require("mongoose");

const affiliateSchema = new mongoose.Schema({
  name: String,
  email: String,
  status: { type: String, default: "pending" },
  code: String,
  sales: { type: Number, default: 0 },
  earnings: { type: Number, default: 0 }
});

module.exports = mongoose.model("Affiliate", affiliateSchema);
