import React from "react";

function HomeCard({
  product_name,
  price,
  productImage,
  category,
  description,
}) {
  return (
    <div className="max-w-xs h-auto cursor-pointer rounded-lg p-2 shadow duration-150 hover:scale-105 hover:shadow-md bg-slate-100 mb-3">
      <img
        className="h-32  w-36 rounded-lg object-cover object-center"
        src={productImage}
        alt="product"
      />
      <p className="my-4 pl-4 font-bold text-gray-500">{product_name}</p>
      <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">
        &#8377;{price}
      </p>
      <span className="bg-gray-100 text-gray-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-500 dark:text-gray-300">
        {category}
      </span>
    </div>
  );
}

export default HomeCard;
