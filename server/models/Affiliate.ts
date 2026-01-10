import mongoose from "mongoose";

const affiliateSchema = new mongoose.Schema({
  name: String,
  email: String,
  status: { type: String, default: "pending" },  // pending, approved, rejected
  code: String,
  sales: { type: Number, default: 0 },
  earnings: { type: Number, default: 0 }
});

export default mongoose.model("Affiliate", affiliateSchema);
