/* eslint-disable react/prop-types */
import React from "react";
import { increaseQuantity } from "../store/productSlice.js";
import { decreaseQuantity, deleteCart } from "../store/productSlice.js";
import { useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
function CartProduct({ items }) {
  const dispatch = useDispatch();
  function decreaseItem() {
    dispatch(decreaseQuantity(items.product_name));
  }

  function increaseItem() {
    dispatch(increaseQuantity(items.product_name));
  }

  function deleteItem() {
    dispatch(deleteCart(items.product_name));
  }
  return (
    <tr>
      <td className="py-4">
        <div className="flex items-center">
          <img
            className="h-16 w-16 mr-4"
            src={items.productImage}
            alt="Product image"
          />
          <span className="font-semibold">{items.product_name}</span>
        </div>
      </td>
      <td className="py-4">&#8377;{items.price}</td>
      <td className="py-4">
        <div className="flex items-center">
          <button
            className="border rounded-md py-2 px-4 mr-2"
            onClick={decreaseItem}
          >
            -
          </button>
          <span className="text-center w-8">{items.quantity}</span>
          <button
            className="border rounded-md py-2 px-4 ml-2"
            onClick={increaseItem}
          >
            +
          </button>
        </div>
      </td>
      <td className="py-4">&#8377;{items.quantity * items.price}</td>
      <td onClick={deleteItem} className=" cursor-pointer">
        <AiOutlineDelete />
      </td>
    </tr>
  );
}

export default CartProduct;
