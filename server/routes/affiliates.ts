const express = require("express");
const Affiliate = require("../models/Affiliate");

const router = express.Router();

router.post("/apply", async (req, res) => {
  const { name, email } = req.body;
  const code = "CR-" + Math.random().toString(36).substring(2, 8).toUpperCase();
  const newAff = new Affiliate({ name, email, code });
  await newAff.save();
  res.json({ message: "Application received - awaiting approval" });
});

module.exports = router;
