import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loader from "../Loader.jsx";
import ProductCard from "../productCard.jsx";
import { GiForkKnifeSpoon } from "react-icons/gi";

function Menu() {
  let data = useSelector((state) => state.products.productData);
  const [productData, setProductData] = useState([...data]);
  const category = [...new Set(data.map((item) => item.category))];
  useEffect(() => {
    setProductData([...data]);
  }, [data]);

  const { product_name } = useParams();
  const dataToDisplay = data.filter(
    (item) => item.product_name === product_name
  );
  console.log(dataToDisplay);

  function categoryFilter(itemName) {
    const newData = data.filter((item) => item.category === itemName);
    setProductData(newData);
  }
  return dataToDisplay.length === 0 ||
    dataToDisplay === undefined ||
    dataToDisplay === null ? (
    <Loader />
  ) : (
    <>
      <center>
        <div className=" w-3/4 h-80 flex-col flex-wrap md:flex md:flex-wrap rounded-lg shadow-md items-center justify-center">
          <div className=" md:w-1/2 flex items-center justify-center">
            <img
              className=" object-cover md:h-80 object-center  md:w-3/4"
              src={dataToDisplay[0].productImage}
              alt={dataToDisplay[0].product_name}
            />
          </div>
          <div className=" md:w-1/2 md:h-8 items-center flex justify-start ">
            <div className=" w-full">
              <h1 className="capitalize text-4xl font-extrabold p-3">
                {dataToDisplay[0].product_name}
              </h1>
              <h2 className="text-3xl p-2">&#8377;{dataToDisplay[0].price}</h2>
              <p className="text-lg text-gray-500 p-2">
                {dataToDisplay[0].description}
              </p>
              <div className="flex justify-between items-center gap-4">
                <button className="bg-blue-600 px-5 py-3 text-white rounded-lg w-2/4 text-center md:w-full">
                  Buy
                </button>
                <button className="bg-blue-600 px-5 py-3 text-white rounded-lg w-2/4 text-center md:w-full">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </center>
      <div className="ml-6 mb-6">
        <p className=" text-xl font-bold bg-slate-500 w-36 px-5 rounded-full text-center text-white">
          Products
        </p>
        <div className="flex md:flex-wrap gap-12 items-center justify-center overflow-aut scrollbar-hide">
          {category.map((productName) => (
            <div key={productName} onClick={() => categoryFilter(productName)}>
              <p className=" text-6xl mt-8 bg-red-500 max-w-[100px] items-center flex justify-center py-5 px-5 rounded-full text-white cursor-pointer">
                <GiForkKnifeSpoon />
              </p>
              <p className="max-w-[100px] items-center flex justify-center mt-2 rounded-full text-slate-600 font-bold">
                {productName}
              </p>
            </div>
          ))}
        </div>

        <div className="flex md:flex-wrap relative top-5 gap-4 bottom-5 items-center justify-center overflow-auto scrollbar-hide">
          {data.length === 0 ? (
            <Loader />
          ) : (
            productData.map((products) => (
              <Link
                to={`/menu/${products.product_name}`}
                key={products.product_name}
                onClick={window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })}
              >
                <ProductCard
                  product_name={products.product_name}
                  price={products.price}
                  productImage={products.productImage}
                  category={products.category}
                  description={products.description}
                />{" "}
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Menu;
