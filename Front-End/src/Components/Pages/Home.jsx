import React, { useEffect, useRef, useState } from "react";
import HomeCard from "../HomeCard";
import { useSelector } from "react-redux";
import Loader from "../Loader.jsx";
import ProductCard from "./../ProductCard.jsx";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { Link } from "react-router-dom";

function Home() {
  let data = useSelector((state) => state.products.productData);
  const [productData, setProductData] = useState([...data]);
  useEffect(() => {
    setProductData([...data]);
  }, [data]);

  const newData = data.slice(0, 5);
  const vegetableData = data.filter((res) => res.category === "Vegetables");
  const category = [...new Set(data.map((item) => item.category))];
  console.log(category);
  console.log(vegetableData);
  console.log(data);

  const galleryRef = useRef();

  const handleScrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollLeft -= 100;
    }
  };

  const handleScrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollLeft += 100;
    }
  };

  function categoryFilter(itemName) {
    const newData = data.filter((item) => item.category === itemName);
    setProductData(newData);
  }
  return (
    <>
      <div className="md:flex gap:2">
        <div className="md:w-1/2 ml-6">
          <div className="flex gap-2 bg-slate-200 w-40 py-1 px-2 rounded-full font-bold text-slate-400 mb-6 items-center justify-center">
            <p>Bike Delivery</p>
            <img
              src="https://static.thenounproject.com/png/4303174-200.png"
              alt="bike delivery"
              className=" h-6"
            />
          </div>
          <h1 className=" md:text-7xl font-bold mb-6 text-4xl">
            The fast delivery to{" "}
            <span className=" text-red-600">your home</span>
          </h1>
          <p className=" mb-7 text-xl text-slate-800">
            Elevate your shopping experience with the epitome of convenience!
            Our lightning-fast delivery service ensures that your favorite
            products are promptly delivered to your doorstep, offering
            unparalleled ease and efficiency. Embrace the comfort of shopping
            from home as we prioritize your satisfaction, guaranteeing a
            seamless and stress-free process. From the click of a button to the
            arrival of your items, experience the perfect fusion of convenience
            and speed. Don't miss out on the joy of hassle-free, fast deliveries
            – shop now and discover the unparalleled ease of our home delivery
            service!
          </p>
          <center>
            <button className=" bg-red-500 px-3 py-2 rounded-full text-white font-bold mb-4">
              Order Now
            </button>
          </center>
        </div>
        <div className="md:w-1/2 flex flex-wrap justify-center gap-6 mr-5 ml-5">
          {newData.length === 0 ? (
            <Loader />
          ) : (
            newData.map((products) => (
              <HomeCard
                key={products.product_name}
                product_name={products.product_name}
                price={products.price}
                productImage={products.productImage}
                category={products.category}
                description={products.description}
              />
            ))
          )}
        </div>
      </div>
      <div className="ml-6 mb-6">
        <div className=" box-border flex items-center justify-between">
          <p className=" text-xl font-bold bg-slate-500 w-36 px-5 rounded-full text-center text-white">
            vegetables
          </p>
          <div className="flex gap-3 relative right-6">
            <button className=" font-bold" onClick={handleScrollLeft}>
              <SlArrowLeft className=" font-bold text-xl text-slate-600" />
            </button>
            <button onClick={handleScrollRight}>
              <SlArrowRight className=" font-bold text-xl text-slate-600" />
            </button>
          </div>
        </div>

        <div
          className="flex gap-6 relative top-3 scroll-smooth overflow-auto scrollbar-hide"
          ref={galleryRef}
        >
          {vegetableData.length === 0 ? (
            <Loader />
          ) : (
            vegetableData.map((data) => (
              <ProductCard
                key={data.product_name}
                product_name={data.product_name}
                price={data.price}
                productImage={data.productImage}
                category={data.category}
                description={data.description}
              />
            ))
          )}
        </div>
      </div>

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

export default Home;
