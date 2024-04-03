import axios from "axios";

export async function addProduct(productData) {
  let endpoint = "https://ecommerce-backend-i8bv.onrender.com";
  // let endpoint = "http://localhost:8000";
  try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${endpoint}/new-product`,
      headers: {
        "Content-Type": "application/json",
      },
      data: productData,
    };
    const response = await axios.request(config);
    return response;
  } catch (error) {
    console.log(
      `Error while adding  product function : addProduct, Error : ${error}`
    );
  }
}
