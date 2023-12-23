import React from "react";
import emptyCart from "../assets/9960436.jpg";
// import emptyGif from "../assets/empty.gif";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="flex items-center justify-center m-0">
      <div className=" md:w-1/4 w-80">
        <img src={emptyCart} alt="empty cart" />
        <h1 className=" text-center text-3xl whitespace-nowrap font-bold">
          Your Cart is <span className=" text-red-500">Empty</span>
        </h1>
        <div className=" items-center text-center p-2 mt-1">
          <Link
            to="/"
            className=" text-white bg-red-500 rounded-full px-4 text-center py-2 hover:bg-red-400"
          >
            <button>Return to Shop</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
