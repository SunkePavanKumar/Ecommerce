import { productModel } from "../Models/productSchema.js";
import Stripe from "stripe";
import compressImageAndGenerateURL from "../utils/convertImageToBuffer.js";
const stripe = new Stripe(process.env.STRIPE_SECRET);

export async function product(req, res) {
  console.log(req.body);
  const postData = await productModel.create({ ...req.body });
  res.send({
    success: true,
    message: "Successfully added the product",
    data: postData,
  });
}

export async function getAllProducts(req, res) {
  const getData = await productModel.find({}).select({ _id: 0 }).lean().exec();

  res.send({
    success: true,
    message: "successfull fetched all the data",
    data: getData,
  });
}

// check out product route

export async function checkoutProduct(req, res) {
  try {
    console.log(req.body);
    let { data } = req.body;
    let params = {};

    let session = await stripe.checkout.sessions.create({
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "required",
      shipping_options: [
        {
          shipping_rate: "shr_1OV7UnSHAusPJJcIA6wEsQUJ",
        },
      ],
      line_items: data.map((items) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: items.product_name,
            },
            unit_amount: items.price,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: items.quantity,
        };
      }),
      success_url: `${process.env.FRONTEND_URL}/payment`,
      cancel_url: `${process.env.FRONTEND_URL}/payment-fail`,
    });

    res.send({
      success: true,
      message: "Payment Success",
      session: session.id,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "payment Failed",
      Error: error,
    });
  }
}
