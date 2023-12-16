import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  product_name: { type: String, required: true },
  productImage: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  StartTs: Date,
  endTs: Date,
});

export const productModel = mongoose.model("products", productSchema);
