import React from "react";
import fail from "../../assets/fail.svg";
import { Link } from "react-router-dom";

function PayementFail() {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="bg-white p-6  md:mx-auto">
        <div className="flex items-center justify-center">
          <img src={fail} alt="fail" className=" h-14" />
        </div>

        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Fail
          </h3>
          <p className="text-gray-600 my-2">
            Currently we are having the higher failure. Please come back again!
          </p>
          <p> Have a great day!</p>
          <div className="py-10 text-center">
            <Link
              to="/"
              className="px-12 bg-red-600 hover:bg-red-500 text-white font-semibold py-3"
            >
              GO BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayementFail;
