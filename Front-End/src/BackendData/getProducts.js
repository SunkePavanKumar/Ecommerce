import axios from "axios";

export async function getProducts() {
  try {
    let endpoint = "https://ecommerce-backend-i8bv.onrender.com";
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${endpoint}/new-product`,
      headers: {
        "Content-Type": "application/json",
      },
      data: "",
    };
    const response = await axios.request(config);
    return response;
  } catch (error) {
    console.log(
      `Error while getting  the products function : getProducts, Error : ${error}`
    );
  }
}
