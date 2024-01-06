import axios from "axios";

export async function checkoutProduct(checkoutData) {
  try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/checkout-product",
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
