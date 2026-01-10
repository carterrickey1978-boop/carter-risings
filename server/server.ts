import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import affiliateRoutes from "./routes/affiliates";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://YOURMONGOUSER:YOURPASSWORD@cluster0.mongodb.net/carterrisings?retryWrites=true&w=majority");

app.use("/api/affiliates", affiliateRoutes);

app.get("/api", (req, res) => {
  res.json({ message: "Carter Risings backend" });
});

app.listen(PORT, () => {
  console.log(`Backend on ${PORT}`);
});
