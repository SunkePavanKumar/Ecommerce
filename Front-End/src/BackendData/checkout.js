import axios from "axios";

export async function checkoutProduct(checkoutData) {
  try {
    // let endpoint = "https://ecommerce-backend-i8bv.onrender.com";
    let endpoint = "http://localhost:8000";
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${endpoint}/checkout-product`,
      headers: {
        "Content-Type": "application/json",
      },
      data: checkoutData,
    };
    const response = await axios.request(config);
    return response;
  } catch (error) {
    console.log(
      `Error while checkoutData function : checkoutProduct, Error : ${error}`
    );
  }
}
