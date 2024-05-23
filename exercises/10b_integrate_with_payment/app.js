import 'dotenv/config';
import express from "express"
import { Stripe } from "stripe"

const app = express();
app.use(express.static("public"));

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY, {
  apiVersion: "2024-04-10",
})

const storeItems = new Map([
  [1, { priceInCents: 10000, name: "Learn React Today" }],
  [2, { priceInCents: 20000, name: "Learn CSS Today" }],
])

app.post('/webhook', express.raw({type: 'application/json'}), async (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, process.env.STRIPE_ENDPOINT_SECRET);
  } catch (err) {
    console.log(err);
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  switch (event.type) {
    case 'charge.failed':
      const chargeFailed = event.data.object;
      console.log('\ncharge.failed\n', chargeFailed);
      break;
    case 'charge.succeeded':
      const chargeSucceeded = event;
      console.log('\ncharge.succeeded\n', chargeSucceeded);
      break;

    case 'checkout.session.completed':
      const checkoutSessionCompleted = event.data.object;
      console.log('\ncheckout.session.completed\n', checkoutSessionCompleted);
      const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
        event.data.object.id,
        {
          expand: ['line_items'],
        }
      );
      console.log('\ncheckout line items\n', sessionWithLineItems.line_items);
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  response.status(200).send();
});

app.post("/create-checkout-session", express.json(), async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(item => {
        const storeItem = storeItems.get(item.id)
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        }
      }),
      success_url: `${process.env.CLIENT_URL}/success.html`,
      cancel_url: `${process.env.CLIENT_URL}/cancel.html`
    })
    res.json({ url: session.url })
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e.message })
  }
});

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, async () => console.log('Server is listening on port', PORT));
