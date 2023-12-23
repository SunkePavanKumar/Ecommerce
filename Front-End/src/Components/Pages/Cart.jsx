import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../cartProduct";
import EmptyCart from "../EmptyCart";

function Cart() {
  const data = useSelector((state) => state.products.cart);
  let subTotal = 0;
  let shipping = 30;
  data.map((items) => {
    subTotal += parseInt(items.price) * items.quantity;
  });
  console.log(data);
  // return data.map((items) => (
  //   <CartProduct items={items} key={items.product_name} />
  // ));
  return data.length == 0 ? (
    <EmptyCart />
  ) : (
    <div className="bg-white h-screen py-1">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((items) => (
                    <CartProduct items={items} key={items.product_name} />
                  ))}
                  {/* More product rows */}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>&#8377;{subTotal}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>&#8377;{shipping}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">
                  &#8377;{subTotal - shipping}
                </span>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
