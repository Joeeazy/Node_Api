//import product model

const Product = require("../models/productModel");

//import express for the Router method
const express = require("express");

//initialize router
const router = express.Router();

const {
  getProducts,
  getProduct,
  sendProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

//fetch data from database
router.get("/", getProducts);

//get a single product use id
router.get("/:id", getProduct);

//route for saving data into the database
router.post("/", sendProduct);

//update/edit data in the database PUT
router.put("/:id", updateProduct);

//delete data in db
router.delete("/:id", deleteProduct);

//export router
module.exports = router;
