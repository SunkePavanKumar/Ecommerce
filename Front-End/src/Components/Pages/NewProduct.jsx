import { useRef, useState } from "react";
import ConvertBase64 from "../../Utiliity/ConvertBase64";
import { addProduct } from "../../BackendData/addProduct";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function NewProduct() {
  const [productImage, SetProductImage] = useState("");
  const [category, setCategory] = useState("");
  const product_name = useRef(null);
  const price = useRef(null);
  const description = useRef(null);
  const navigator = useNavigate();
  async function addProductData(event) {
    event.preventDefault();
    const data = {
      product_name: product_name.current.value,
      category,
      productImage,
      price: price.current.value,
      description: description.current.value,
    };
    if (!product_name || !category || !productImage || !price || !description) {
      toast.error("Enter the required fields");
      return;
    }

    const productData = await addProduct(data);
    if (productData.data.success) {
      toast.success("Successfully added the product👋");
      navigator("/");
      product_name.current.value = "";
      price.current.value = "";
      description.current.value = "";
      setCategory("");
      SetProductImage("");
    }
    console.log(data);
  }

  async function getImageData(event) {
    const base64Data = await ConvertBase64(event.target.files[0]);
    SetProductImage(base64Data);
  }

  function getCategory(event) {
    setCategory(event.target.value);
  }
  return (
    <form className="max-w-sm relative top-1/2 md:left-96 w-96 p-1 bg-slate-50 sm:left-3">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="product-name"
          >
            Product Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="product-name"
            type="text"
            placeholder="Enter the name of the product"
            name="product-name"
            ref={product_name}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="Category"
          >
            Category
          </label>
        </div>
        <div className="md:w-2/3">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="Category"
            name="Category"
            value={category}
            onChange={getCategory}
          >
            <option>select category</option>
            <option>Fruits</option>
            <option>Vegetables</option>
            <option>Ice Cream</option>
            <option>Dosa</option>
            <option>Pizza</option>
            <option>Rice</option>
            <option>Cake</option>
          </select>
        </div>
      </div>

      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="imageUpload"
          >
            Upload file
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            aria-describedby="file_input_help"
            id="imageUpload"
            name="imageUpload"
            type="file"
            accept="image/*"
            onChange={getImageData}
          />
        </div>
      </div>
      <div className="md:flex md:items-end justify-end mb-6">
        <div className="md:w-2/3">
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px).
          </p>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="price"
          >
            Price
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="price"
            type="text"
            placeholder="Price of the item"
            name="price"
            ref={price}
          />
        </div>
      </div>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="description"
          >
            Description
          </label>
        </div>
        <div className="md:w-2/3">
          <textarea
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="description"
            type="text"
            placeholder="Add some description to the product"
            name="description"
            ref={description}
          />
        </div>
      </div>

      <div className="md:flex md:items-center">
        <div className="md:w-1/3" />
        <div className="md:w-2/3">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
            onClick={addProductData}
          >
            Add Item
          </button>
        </div>
      </div>
    </form>
  );
}

export default NewProduct;
