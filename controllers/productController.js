//import product model
const Product = require("../models/productModel");

//express-async-handler

const asyncHandler = require("express-async-handler");
//CRUD LOGIC controller

//get all products
exports.getProducts = asyncHandler(async (req, res) => {
  try {
    const data = await Product.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

//get a single product
exports.getProduct = asyncHandler(async (req, res) => {
  try {
    //destructure id
    const { id } = req.params;
    //pass id
    const product = await Product.findById(id);
    //response
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
    //res.status(500).json({ message: err.message });
  }
});

//create product to the db
exports.createProduct = asyncHandler(async (req, res) => {
  try {
    //create a new product in the db
    const product = await Product.create(req.body);
    //respond with data
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
    // console.log(error.message);
    // res.status(500).json({ message: error.message });
  }
});

//update/edit product
exports.updateProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    //fetch the id and the whole data to update
    const product = await Product.findByIdAndUpdate(id, req.body);
    //cannot find product
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find the product with ID ${id}` });
    }
    //else return updated product
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
    // res.status(500).json({ message: joe.message });
  }
});

//delete product
exports.deleteProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404);
      throw new Error(`couldn't find product with id ${id}`);
      // return res
      //   .status(400)
      //   .json({ message: `couldn't find product with id ${id}` });
    }
    res.status(200).json({ message: "successfully deleted" });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
    // res.status(500).json({ message: error.message });
  }
});
//module.exports = getProduct;
