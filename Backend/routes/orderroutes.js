const express = require("express");
const Order = require("Backend/models/order");

const router = express.Router();

router.post("/", async (req, res) => {
  const order = await Order.create({
    ...req.body,
    timeline: [{ status: "Order Placed", date: new Date() }]
  });
  res.json(order);
});

router.put("/:id/status", async (req, res) => {
  const order = await Order.findById(req.params.id);
  order.status = req.body.status;
  order.timeline.push({ status: req.body.status, date: new Date() });
  await order.save();
  res.json(order);
});

router.get("/:id", async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json(order);
});

module.exports = router;
