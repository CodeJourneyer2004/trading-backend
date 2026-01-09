const express = require("express");
const router = express.Router();
const { trades } = require("../data/store");

router.get("/", (req, res) => {
  res.json(trades);
});

module.exports = router;
