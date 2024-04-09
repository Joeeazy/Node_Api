//create an express variable and require the package from express node_modules
const express = require("express");

//require dotenv
const dotenv = require("dotenv");

//create a mongoose variable
const mongoose = require("mongoose");

//initialize an app using
const app = express();

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
