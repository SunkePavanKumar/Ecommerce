import axios from "axios";

export async function postLoginData(loginData) {
  try {
    // let endpoint = "https://ecommerce-backend-i8bv.onrender.com";
    let endpoint = "http://localhost:8000";
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${endpoint}/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: loginData,
    };
    const response = await axios.request(config);
    return response;
  } catch (error) {
    console.log(
      `Error while posting data function : postLoginData, Error : ${error}`
    );
  }
}
