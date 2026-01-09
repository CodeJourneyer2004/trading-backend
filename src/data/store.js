// in-memory database
const instruments = [
  {
    symbol: "AAPL",
    exchange: "NASDAQ",
    instrumentType: "STOCK",
    lastTradedPrice: 180
  },
  {
    symbol: "BTC",
    exchange: "CRYPTO",
    instrumentType: "CRYPTO",
    lastTradedPrice: 98000
  }
];

const orders = [];
const trades = [];
const portfolio = {};

module.exports = {
  instruments,
  orders,
  trades,
  portfolio
};
