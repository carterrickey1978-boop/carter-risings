import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import affiliateRoutes from "./routes/affiliates";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const MONGO_URI = "mongodb+srv://carteradmin:YOURPASSWORD@cluster0.xxxxx.mongodb.net/carterrisings?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI).then(() => console.log("MongoDB connected"));

app.use("/api/affiliates", affiliateRoutes);

app.get("/api", (req, res) => {
  res.json({ message: "Carter Risings backend live!" });
});

app.listen(PORT, () => {
  console.log(`Backend on ${PORT}`);
});
