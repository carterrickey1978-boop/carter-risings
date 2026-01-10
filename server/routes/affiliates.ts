import express from "express";
import Affiliate from "../models/Affiliate";

const router = express.Router();

router.post("/apply", async (req, res) => {
  const { name, email } = req.body;
  const code = "CR-" + Math.random().toString(36).substring(2, 8).toUpperCase();
  const newAff = new Affiliate({ name, email, code });
  await newAff.save();
  res.json({ message: "Application received - awaiting approval" });
});

router.get("/admin", async (req, res) => {
  const affiliates = await Affiliate.find();
  res.json(affiliates);
});

router.post("/admin/approve", async (req, res) => {
  const { id } = req.body;
  await Affiliate.findByIdAndUpdate(id, { status: "approved" });
  res.json({ message: "Approved" });
});

export default router;
