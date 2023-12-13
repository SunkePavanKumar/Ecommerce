import axios from "axios";

export async function postLoginData(loginData) {
  try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/login",
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
