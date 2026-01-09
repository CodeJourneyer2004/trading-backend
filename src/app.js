const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/v1/instruments", require("./routes/instruments"));
app.use("/api/v1/orders", require("./routes/orders"));
app.use("/api/v1/trades", require("./routes/trades"));
app.use("/api/v1/portfolio", require("./routes/portfolio"));

module.exports = app;
