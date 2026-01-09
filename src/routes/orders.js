const express = require("express");
const router = express.Router();
const { orders } = require("../data/store");
const { placeOrder } = require("../services/orderService");

router.post("/", (req, res) => {
  try {
    const order = {
      orderId: "O" + (orders.length + 1),
      symbol: req.body.symbol,
      side: req.body.side,
      orderStyle: req.body.orderStyle,
      quantity: req.body.quantity,
      price: req.body.price,
      status: "NEW"
    };

    const executedOrder = placeOrder(order);
    res.status(201).json(executedOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/:orderId", (req, res) => {
  const order = orders.find(o => o.orderId === req.params.orderId);
  if (!order) {
    return res.status(404).json({ error: "Order not found" });
  }
  res.json(order);
});

module.exports = router;
