import express from "express";
import { signUp, login } from "./controllers/userController.js";
import {
  product,
  getAllProducts,
  checkoutProduct,
} from "./controllers/productController.js";

const router = express.Router();

router.route("/signup").post(signUp);

router.route("/login").post(login);

router.route("/new-product").post(product).get(getAllProducts);

// route for the payment Integration

router.route("/checkout-product").post(checkoutProduct);

export default router;
