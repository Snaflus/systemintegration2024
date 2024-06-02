const express = require("express");
const app = express();
require("dotenv").config({ path: "./.env" });
checkEnv();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
});

app.use(express.urlencoded({ extended: true }));

app.get("/config", async (req, res) => {
  const price = await stripe.prices.retrieve(process.env.PRICE);

  res.send({
    publicKey: process.env.STRIPE_PUBLISHABLE_KEY,
    unitAmount: price.unit_amount,
    currency: price.currency,
  });
});

// Fetch the Checkout Session to display the JSON result on the success page
app.get("/checkout-session", async (req, res) => {
  const { sessionId } = req.query;
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  res.send(session);
});

app.post("/create-checkout-session", async (req, res) => {
  const domainURL = process.env.DOMAIN;

  const { quantity } = req.body;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: process.env.PRICE,
        quantity: quantity,
      },
    ],
    success_url: `${domainURL}/success.html?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${domainURL}/canceled.html`,
  });

  return res.redirect(303, session.url);
});

app.listen(4242, () => console.log(`Node server listening on port ${4242}!`));

function checkEnv() {
  const price = process.env.PRICE;
  if (price === "price_12345" || !price) {
    console.log(
      "You must set a Price ID in the environment variables. Please see the README."
    );
    process.exit(0);
  }
}
