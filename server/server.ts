const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const affiliateRoutes = require("./routes/affiliates");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const MONGO_URI = "YOUR_MONGO_URI_HERE";

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("Mongo error", err));

app.use("/api/affiliates", affiliateRoutes);

app.get("/api", (req, res) => {
  res.json({ message: "Carter Risings backend live!" });
});

app.listen(PORT, () => {
  console.log(`Backend on ${PORT}`);
});
