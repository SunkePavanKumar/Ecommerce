import "./App.css";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { getProducts } from "./BackendData/getProducts.js";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "./store/productSlice.js";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    async function products() {
      const prodcutsData = await getProducts();
      dispatch(getAllProducts(prodcutsData.data));
    }

    products();
  }, []);

  console.log(products);
  return (
    <>
      <Toaster />
      <Header />
      <main className=" pt-28 bg-white w-full">
        <Outlet />
      </main>
    </>
  );
}

export default App;
