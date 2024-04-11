//create an express variable and require the package from express node_modules
const express = require("express");

const dotenv = require("dotenv");

const Product = require("./models/productModel");

//create a mongoose variable
const mongoose = require("mongoose");

//initialize an app using
const app = express();

//middleware to use json as body
app.use(express.json());

//middleware to use urlencoded as body
app.use(express.urlencoded({ extended: false }));

//config dotenv to use it as process.env for environmental varables
dotenv.config();

//env port
const PORT = process.env.PORT || 5000;

//declare route to access the app in the browser
//req === what client sends to you(request)
//res === response back to the client
app.get("/", (req, res) => {
  //send something to client
  res.send("Hello from Node Api");
});

//trying another route
app.get("/blog", (req, res) => {
  //send something to client
  res.send("Hello Blog, My Name Is Joe");
});

//fetch data from database
app.get("/products", async (req, res) => {
  try {
    const data = await Product.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get a single product use id
app.get("/products/:id", async (req, res) => {
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
});

//route for saving data into the database
app.post("/products", async (req, res) => {
  try {
    //create a new product in the db
    const product = await Product.create(req.body);
    //respond with data
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//update/edit data in the database PUT
app.put("/products/:id", async (req, res) => {
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
});

//delete data in db
app.delete("/products/:id", async (req, res) => {
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
});

//connect to you mongodb then console if connected or not
//right way first connect to DB then listen to the port
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
    //make the app listen at a port eg 3000 donno why 3000 every single time
    app.listen(PORT, () => {
      console.log(`Node Api is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
