import { productModel } from "../Models/productSchema.js";
export async function product(req, res) {
  console.log(req.body);
  const postData = await productModel.create({ ...req.body });
  res.send({
    success: true,
    message: "Successfully added the product",
    data: postData,
  });
}

export async function getAllProducts(req, res) {
  const getData = await productModel.find({}).select({ _id: 0 }).lean().exec();

  res.send({
    success: true,
    message: "successfull fetched all the data",
    data: getData,
  });
}
