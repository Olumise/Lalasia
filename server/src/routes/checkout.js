const Stripe = require("stripe");
const { client } = require("../config/databasepg");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_KEY;
const websiteUrl = process.env.WEBSITE_URL;
const { client } = require("../config/databasepg");

app.post("/create-checkout", async (req, res) => {
	try {
		const { products, purchaser_info } = req.body;
		const productsLineItems = await Promise.all(
			products.map(async (item) => {
				const productData = await client.query(
					"SELECT * FROM produucts WHERE id = $1",
					[item.id]
				);
				const product = productData.rows[0];
				return {
					price_data: {
						currency: "usd",
						product_data: {
							name: product.name,
						},
						unit_amount: product.price * 100,
					},
					quantity: item.quantity,
				};
			})
		);

		let subtotal = 0;
		productsLineItems
			.map((item) => item.unit_amount * item.quantity)
			.forEach((number) => {
				subtotal += number;
			});

		const feeLineItem = {
			price_data: {
				currency: "usd",
				product_data: {
					name: "Checkout Fee",
				},
				unit_amount: fee * (0.15).toFixed(2),
			},
			quantity: 1,
		};

		const session = await stripe.checkout.sessions.create({
			success_url: `${websiteUrl}/payment-confirmed`,
			cancel_url: `${websiteUrl}/order-cancelled`,
			line_items: [...productsLineItems, ...feeLineItem],

			metadata: {
				purchaser_info,
                product_id: products.map(item=> item.id)
			},
			customer_email: purchaser_info.email,
			mode: "payment",
		});

        res.send(session.url)
	} catch (err) {
        res.status(400).send(err.message)
    }
});

app.post(
	"/webhook",
	express.raw({ type: "application/json" }),
	(request, response) => {
		let event;
		if (endpointSecret) {
			// Get the signature sent by Stripe
			const signature = request.headers["stripe-signature"];
			try {
				event = stripe.webhooks.constructEvent(
					request.body,
					signature,
					endpointSecret
				);
			} catch (err) {
				console.log(`⚠️ Webhook signature verification failed.`, err.message);
				return response.sendStatus(400);
			}

			// Handle the event
			switch (event.type) {
				case "payment_intent.succeeded":
					const paymentIntent = event.data.object;
					console.log(paymentIntent);
					break;
				default:
					console.log(`Unhandled event type ${event.type}`);
			}

			// Return a response to acknowledge receipt of the event
			response.json({ received: true });
		}
	}
);
