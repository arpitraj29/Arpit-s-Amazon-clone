const functions = require("firebase-functions");
const express = require("express");
const cors= require("cors");
const stripe = require("stripe")("sk_test_51JD7H9SJD5LMztcrBy8sbWgxMButt7IdgbGd2X90Iz8X8mb5wSk5MTjY8qXRsLePB4NXcD8D8MLmCxnOpGmtwDfF00AZTLsuhl");

const app = express();


// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("helo world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
//http://localhost:5001/challenge-ar/us-central1/api
