//import express for the Router method
const express = require("express");

//initialize router
const router = express.Router();

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

//CRUD OPERATIONS CREATE, READ, UPDATE, DELETE

//route to fetch data from database
router.get("/", getProducts);

//route to get a single product use id
router.get("/:id", getProduct);

//route for create data into the database
router.post("/", createProduct);

//route to update/edit data in the database PUT
router.put("/:id", updateProduct);

//route to delete data in db
router.delete("/:id", deleteProduct);

//export router
module.exports = router;
