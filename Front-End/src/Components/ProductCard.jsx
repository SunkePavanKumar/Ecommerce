import React from "react";

function ProductCard({
  product_name,
  price,
  productImage,
  category,
  description,
}) {
  return (
    <div className="max-w-sm h-auto cursor-pointer rounded-lg p-2 shadow duration-150 hover:scale-105 hover:shadow-md bg-slate-100">
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

      <p className=" bg-red-500 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded w-full text-center">
        Add Card
      </p>
    </div>
  );
}

export default ProductCard;
