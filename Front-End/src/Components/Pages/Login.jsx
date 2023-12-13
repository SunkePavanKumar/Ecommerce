import React, { useState } from "react";
import { BiShow, BiSolidHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import signUpImage from "../../assets/login-animation.gif";
import { useRef } from "react";
import { postLoginData } from "../../BackendData/loginData.js";
import toast from "react-hot-toast";

function Login() {
  let [show, setShow] = useState(false);
  let email = useRef(null);
  let password = useRef(null);

  /**
   * It is used for the password hide and show
   */
  function displayShow() {
    show = !show;
    setShow(show);
  }

  // On submition of the form to get the data

  async function loginAccount(event) {
    event.preventDefault();
    const loginData = {
      email: email.current.value,
      password: password.current.value,
    };

    if (!loginData.email || !loginData.password) {
      toast.error("Enter the required details");
      return;
    }
    const loginResponse = await postLoginData(loginData);
    if (loginResponse.data.message === "Loged in successfully") {
      toast.success("User Loged in Successfully 👋");
    } else {
      toast.error("Login Fail!Enter the correct details");
    }
    email.current.value = "";
    password.current.value = "";
  }

  return (
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <img
          src={signUpImage}
          alt="SignUp"
          className=" relative h-16 bottom-5 left-32 shadow-md rounded-full"
        />
        <h1 className="mb-8 text-3xl text-center">Log In</h1>

        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
          placeholder="Email"
          ref={email}
        />
        <div className="flex items-center justify-center relative">
          <input
            type={`${show ? "text" : "password"}`}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            ref={password}
          />
          {show ? (
            <div
              className=" absolute text-2xl text-gray-400 show  cursor-pointer"
              onClick={displayShow}
            >
              <BiShow />
            </div>
          ) : (
            <div
              className=" absolute text-2xl text-gray-400 show cursor-pointer"
              onClick={displayShow}
            >
              <BiSolidHide />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full text-center py-3 rounded  text-white hover:bg-green-dark focus:outline-none my-1 bg-red-500 hover:rounded-3xl"
          onClick={loginAccount}
        >
          Log In
        </button>
      </div>
      <div className="text-grey-dark mt-6 mb-10">
        Dont have an account?
        <Link
          className="no-underline border-blue-50 text-blue-700"
          to="/signup"
        >
          sign up
        </Link>
        .
      </div>
    </div>
  );
}

export default Login;
