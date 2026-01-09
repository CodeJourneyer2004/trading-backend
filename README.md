# Trading Backend API – Assignment Submission

## Overview

This project implements a simplified trading backend using **Node.js and Express**.  
It exposes RESTful APIs to simulate core trading operations such as viewing tradable instruments, placing buy and sell orders, checking order status, viewing executed trades, and fetching portfolio holdings.

The system uses **in-memory data storage** and assumes a **single mocked user**, as required by the assignment.

---

## Technology Stack

- **Backend**: Node.js
- **Framework**: Express.js
- **API Format**: JSON
- **Database**: In-memory (JavaScript objects)
- **Authentication**: Mocked (single hardcoded user)

---

## Setup and Run Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm (bundled with Node.js)

### Steps to Run the Project

1. Clone the repository or extract the ZIP file
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
Start the server:

bash
node src/server.js
The server will start at:

arduino
http://localhost:3000

API Details
1. Fetch Tradable Instruments
GET /api/v1/instruments

Response

json
[
  {
    "symbol": "AAPL",
    "exchange": "NASDAQ",
    "instrumentType": "STOCK",
    "lastTradedPrice": 180
  },
  {
    "symbol": "BTC",
    "exchange": "CRYPTO",
    "instrumentType": "CRYPTO",
    "lastTradedPrice": 42000
  }
]

2. Place a New Order
POST /api/v1/orders

Request Body

json
{
  "symbol": "AAPL",
  "side": "BUY",
  "orderStyle": "MARKET",
  "quantity": 10
}
Response

json
{
  "orderId": "O1",
  "symbol": "AAPL",
  "side": "BUY",
  "orderStyle": "MARKET",
  "quantity": 10,
  "status": "EXECUTED"
}
Validations

Quantity must be greater than 0

Price is mandatory for LIMIT orders

Instrument must exist

3. Fetch Order Status
GET /api/v1/orders/{orderId}

Response

json
{
  "orderId": "O1",
  "symbol": "AAPL",
  "side": "BUY",
  "orderStyle": "MARKET",
  "quantity": 10,
  "status": "EXECUTED"
}

4. Fetch Executed Trades
GET /api/v1/trades

Response

json
[
  {
    "tradeId": "T1",
    "orderId": "O1",
    "symbol": "AAPL",
    "side": "BUY",
    "quantity": 10,
    "price": 180,
    "timestamp": "2026-01-08T18:30:00Z"
  }
]

5. Fetch Portfolio Holdings
GET /api/v1/portfolio

Response

json
[
  {
    "symbol": "AAPL",
    "quantity": 10,
    "averagePrice": 180,
    "currentValue": 1800
  }
]
Sample API Usage (cURL)

Place a Buy Order
bash
curl -X POST http://localhost:3000/api/v1/orders \
-H "Content-Type: application/json" \
-d '{
  "symbol": "AAPL",
  "side": "BUY",
  "orderStyle": "MARKET",
  "quantity": 10
}'

Fetch Portfolio
bash
curl http://localhost:3000/api/v1/portfolio

Assumptions Made During Implementation
Single hardcoded user (authentication is mocked)
Orders are executed immediately for simplicity
No real market price feed integration
No order matching engine
Data is stored in memory and resets on server restart
LIMIT orders are assumed to execute immediately if valid
Short-selling validation is not implemented

Project Structure
powershell
Copy code
src/
 ├── data/          # In-memory data storage
 ├── routes/        # API routes
 ├── services/      # Business logic
 ├── app.js         # Express app configuration
 └── server.js      # Server startup
