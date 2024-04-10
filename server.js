//create an express variable and require the package from express node_modules
const express = require("express");

const dotenv = require("dotenv");

const Product = require("./models/productModel");

//create a mongoose variable
const mongoose = require("mongoose");

//initialize an app using
const app = express();

//middleware
app.use(express.json());

//config dotenv to use it as process.env for environmental varables
dotenv.config();

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

//route for saving data into the database
app.post("/product", async (req, res) => {
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

//connect to you mongodb then console if connected or not
//right way first connect to DB then listen to the port
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
    //make the app listen at a port eg 3000 donno why 3000 every single time
    app.listen(5000, () => {
      console.log("Node Api is running on port 5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
