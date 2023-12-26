import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/productSlice.js";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function ProductCard({
  product_name,
  price,
  productImage,
  category,
  description,
}) {
  const itemsInCart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  function postToCart() {
    const checkItem = itemsInCart.filter(
      (items) => items.product_name === product_name
    );
    if (checkItem.length === 0) {
      dispatch(
        addToCart({
          product_name,
          price,
          productImage,
          category,
          description,
          quantity: 1,
        })
      );
      toast.success("Added to Cart!");
    } else {
      toast.error("Item Already Exists in Cart!✋");
    }
  }
  return (
    <div className="max-w-sm h-auto cursor-pointer rounded-lg p-2 shadow duration-150 hover:scale-105 hover:shadow-md bg-slate-100">
      <Link
        to={`/menu/${product_name}`}
        key={product_name}
        onClick={window.scrollTo({
          top: 0,
          behavior: "smooth",
        })}
      >
        <img
          className="h-32  w-36 rounded-lg object-cover object-center"
          src={productImage}
          alt="product"
        />
        <div className="flex items-center justify-between">
          <p className="my-4 pl-4 font-bold text-gray-500 text-xl">
            {product_name}
          </p>
          <p className="mb-4 ml-4 text-xl font-bold text-gray-800">
            &#8377;{price}
          </p>
        </div>
      </Link>

      <button
        className=" bg-red-500 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded w-full text-center"
        onClick={postToCart}
      >
        Add Card
      </button>
    </div>
  );
}

export default ProductCard;
