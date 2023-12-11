import React, { useState } from "react";
import { BiShow, BiSolidHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import signUpImage from "../../assets/login-animation.gif";

function SignUp() {
  let [show, setShow] = useState(true);
  let [confirmShow, setConfirmShow] = useState(true);
  function displayShow() {
    show = !show;
    setShow(show);
  }

  function confirm() {
    confirmShow = !confirmShow;
    setConfirmShow(confirmShow);
  }
  return (
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <img
          src={signUpImage}
          alt="SignUp"
          className=" relative h-16 bottom-5 left-32 shadow-md rounded-full"
        />
        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="fullname"
          placeholder="Full Name"
        />
        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
          placeholder="Email"
        />
        <div className="flex items-center justify-center relative">
          <input
            type={`${show ? "text" : "password"}`}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
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
          className="w-full text-center py-3 rounded  text-white hover:bg-green-dark focus:outline-none my-1 bg-green-500"
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
        <a className="no-underline border-blue-50 text-blue-700" href="/login">
          Log in
        </a>
        .
      </div>
    </div>
  );
}

export default SignUp;
