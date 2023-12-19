import axios from "axios";

export async function addProduct(productData) {
  let endpoint = "";
  let enviroment = import.meta.env.DEVELOPMENT;
  if (enviroment === "PROD") {
    endpoint = import.meta.env.PROD_URL;
  } else {
    endpoint = import.meta.env.DEVELOPMENT;
  }
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
