const Product = require("../models/productModel");

exports.getProducts = async (req, res) => {
  try {
    const data = await Product.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    //destructure id
    const { id } = req.params;
    //pass id
    const product = await Product.findById(id);
    //response
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.sendProduct = async (req, res) => {
  try {
    //create a new product in the db
    const product = await Product.create(req.body);
    //respond with data
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
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
  } catch (joe) {
    res.status(500).json({ message: joe.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(400)
        .json({ message: `couldn't find product with id ${id}` });
    }
    res.status(200).json({ message: "successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//module.exports = getProduct;
