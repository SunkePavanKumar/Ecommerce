import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const data = useSelector((state) => state.products.cart);
  console.log(data);
  return <div>items</div>;
}

export default Cart;
