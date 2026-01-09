const express = require("express");
const router = express.Router();
const { instruments } = require("../data/store");

router.get("/", (req, res) => {
  res.json(instruments);
});

module.exports = router;