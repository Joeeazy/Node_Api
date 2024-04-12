//create an express variable and require the package from express node_modules
const express = require("express");

const dotenv = require("dotenv");

//import router
const router = require("./routes/productRoute");

//create a mongoose variable
const mongoose = require("mongoose");

//import error middleware
const errorMiddleware = require("./middleware/errorMiddleware");

//initialize an app using
const app = express();

app.use("/api/products", router);

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
  //send message to client
  res.send("Hello from Node Api");
});

//trying another route
app.get("/blog", (req, res) => {
  //send message to client
  res.send("Hello Blog, My Name Is Joe");
});

//use middleware
app.use(errorMiddleware);

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
