import axios from "axios";

export async function addProduct(productData) {
  try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/new-product",
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
