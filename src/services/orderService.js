const { orders, trades, portfolio, instruments } = require("../data/store");

function placeOrder(order) {
  const instrument = instruments.find(i => i.symbol === order.symbol);
  if (!instrument) {
    throw new Error("Instrument not found");
  }

  if (order.quantity <= 0) {
    throw new Error("Quantity must be greater than 0");
  }

  if (order.orderStyle === "LIMIT" && !order.price) {
    throw new Error("Price required for LIMIT order");
  }

  order.status = "EXECUTED";
  orders.push(order);

  const trade = {
    tradeId: "T" + (trades.length + 1),
    orderId: order.orderId,
    symbol: order.symbol,
    side: order.side,
    quantity: order.quantity,
    price: order.price || instrument.lastTradedPrice,
    timestamp: new Date()
  };

  trades.push(trade);

  if (!portfolio[order.symbol]) {
    portfolio[order.symbol] = {
      symbol: order.symbol,
      quantity: 0,
      averagePrice: 0
    };
  }

  const holding = portfolio[order.symbol];

  if (order.side === "BUY") {
    const totalCost =
      holding.averagePrice * holding.quantity +
      trade.price * trade.quantity;

    holding.quantity += trade.quantity;
    holding.averagePrice = totalCost / holding.quantity;
  } else {
    holding.quantity -= trade.quantity;
  }

  return order;
}

module.exports = { placeOrder };
