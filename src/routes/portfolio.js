const express = require("express");
const router = express.Router();
const { portfolio, instruments } = require("../data/store");

router.get("/", (req, res) => {
  const response = Object.values(portfolio).map(p => {
    const instrument = instruments.find(i => i.symbol === p.symbol);
    return {
      symbol: p.symbol,
      quantity: p.quantity,
      averagePrice: p.averagePrice,
      currentValue: p.quantity * instrument.lastTradedPrice
    };
  });

  res.json(response);
});

module.exports = router;
