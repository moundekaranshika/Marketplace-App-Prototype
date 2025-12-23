const express = require("express");
const Review = require("Backend/models/review");

const router = express.Router();

router.post("/", async (req, res) => {
  const review = await Review.create({ ...req.body, verifiedBuyer: true });
  res.json(review);
});

router.get("/:productId", async (req, res) => {
  const reviews = await Review.find({ productId: req.params.productId });
  res.json(reviews);
});

module.exports = router;
