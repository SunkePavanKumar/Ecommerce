import axios from "axios";

export async function postSignUpdata(signUpData) {
  try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/signup",
      headers: {
        "Content-Type": "application/json",
      },
      data: signUpData,
    };
    const response = await axios.request(config);
    return response;
  } catch (error) {
    console.log(
      `Error while posting data function : postSignupdata, Error : ${error}`
    );
  }
}
