import axios from "axios";

export async function getProducts() {
  try {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/new-product",
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
