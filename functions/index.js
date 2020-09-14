const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { default: Stripe } = require("stripe");
const stripe = require("stripe")("sk_test_VQR6Nq2TIBH6R4z030ztw5GV");

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://127.0.0.1:5002/clone-b0c24/us-central1/api
