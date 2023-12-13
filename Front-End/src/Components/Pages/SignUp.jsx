import React, { useState } from "react";
import { BiShow, BiSolidHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import signUpImage from "../../assets/login-animation.gif";
import { useRef } from "react";
import ConvertBase64 from "../../Utiliity/ConvertBase64";
import { postSignUpdata } from "../../BackendData/signUpdata";
import toast from "react-hot-toast";
function SignUp() {
  let [show, setShow] = useState(false);
  let [confirmShow, setConfirmShow] = useState(false);
  const [input, setInput] = useState({});
  let fullName = useRef(null);
  let email = useRef(null);
  let password = useRef(null);
  let confirmPassword = useRef(null);
  let navigator = useNavigate();

  /**
   * It is used for the password hide and show
   */
  function displayShow() {
    show = !show;
    setShow(show);
  }

  //   This is used for the confirm password hide and show
  function confirm() {
    confirmShow = !confirmShow;
    setConfirmShow(confirmShow);
  }

  // On submition of the form to get the data

  async function createAccount(event) {
    event.preventDefault();
    const signUpData = {
      fullName: fullName.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value,
    };

    console.log(signUpData);
    if (
      !signUpData.fullName ||
      !signUpData.email ||
      !signUpData.password ||
      !signUpData.confirmPassword
    ) {
      [alert("Please! Enter the mandatory Fields")];
    }

    if (signUpData.password.length < 6) {
      toast.error("Password should be 6 characters 🙃");

      return;
    }
    if (signUpData.password !== signUpData.confirmPassword) {
      toast.error("Password and Confirm  password doesnot match 🙃");
    } else {
      const signUpResponse = await postSignUpdata({ ...input, ...signUpData });
      if (
        !signUpResponse.data.success &&
        signUpResponse.data.message === "User Already Exits"
      ) {
        toast.error("User Already Exist! Try to Login 🙃");
        navigator("/login");
      } else {
        toast.success("Successfully Registered 👋");
        navigator("/login");
      }
    }
  }

  // Handle the image

  async function imageHandler(event) {
    console.log(event);
    console.log(event.target.value);
    const data = await ConvertBase64(event.target.files[0]);
    setInput((pre) => ({ ...pre, image: data }));
  }

  return (
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full relative flex flex-col">
        <label htmlFor="image" className="relative">
          <img
            src={!input.image ? signUpImage : input.image}
            alt="SignUp"
            className=" relative h-24 bottom-5 left-28 shadow-md top-0.5 right-5 cursor-pointer rounded-full p-1 object-contain"
          />
          <input
            type="file"
            className="hidden"
            id="image"
            accept="image/*"
            onChange={imageHandler}
          />
          <p className=" absolute left-32 -bottom-1 ml-2  text-red-900 rounded-full">
            upload
          </p>
        </label>

        <h1 className="mb-8 text-3xl text-center relative">Sign up</h1>
        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="fullname"
          placeholder="Full Name"
          ref={fullName}
        />
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
        <div className="flex items-center justify-center relative">
          <input
            type={`${confirmShow ? "text" : "password"}`}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
            ref={confirmPassword}
          />
          {confirmShow ? (
            <div
              className=" absolute text-2xl text-gray-400 show cursor-pointer"
              onClick={confirm}
            >
              <BiShow />
            </div>
          ) : (
            <div
              className=" absolute text-2xl text-gray-400 show cursor-pointer"
              onClick={confirm}
            >
              <BiSolidHide />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full text-center py-3 rounded  text-white hover:bg-green-dark focus:outline-none my-1 bg-red-500 hover:rounded-3xl"
          onClick={createAccount}
        >
          Create Account
        </button>
        <div className="text-center text-sm text-grey-dark mt-4">
          By signing up, you agree to the
          <Link className="border-b border-grey-dark text-blue-600" to="/terms">
            &nbsp;Terms of Service&nbsp;
          </Link>
          and &nbsp;
          <Link
            className="no-underline border-b border-grey-dark text-blue-700"
            to={"/policy"}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="text-grey-dark mt-6 mb-10">
        Already have an account?
        <Link className="no-underline border-blue-50 text-blue-700" to="/login">
          Log in
        </Link>
        .
      </div>
    </div>
  );
}

export default SignUp;
