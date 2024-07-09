import { mongooseConnect } from "@/lib/mongoose";
const stripe = require('stripe')(process.env.STRIPE_SK);
import { buffer } from 'micro';
import { Order } from "@/models/Order";

const endpointSecret = "whsec_fe743fd281fad511f4d99249c5fecd5a5467016526c6f40d1010924df0b7c380";

export default async function handler(req, res) {
  await mongooseConnect();
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
  } catch (err) {
    console.error(`Webhook Error: ${err.message}`);
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  console.log(`Received event type ${event.type}`);

  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      const orderId = session.metadata.orderId;
      const paymentIntent = session.payment_intent;

      if (orderId && paymentIntent) {
        try {
          const paymentIntentData = await stripe.paymentIntents.retrieve(paymentIntent);
          if (paymentIntentData.status === 'succeeded') {
            const updatedOrder = await Order.findByIdAndUpdate(orderId, {
              paid: true,
            });
            if (updatedOrder) {
              console.log(`Order ${orderId} updated to paid.`);
            } else {
              console.error(`Order ${orderId} not found.`);
            }
          }
        } catch (error) {
          console.error(`Error updating order: ${error.message}`);
        }
      } else {
        console.error(`Order ID or Payment Intent not found`);
      }
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).send('ok');
}

export const config = {
  api: { bodyParser: false, }
};
