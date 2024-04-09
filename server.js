//create an express variable and require the package from express node_modules
const express = require("express");

//initialize an app using
const app = express();

//declare route to access the app in the browser
//req === what client sends to you(request)
//res === response back to the client
app.get("/", (req, res) => {
  //send something to client
  res.send("Hello from Node Api");
});

//make the app listen at a port eg 3000 donno why 3000 every single time
app.listen(5000, () => {
  console.log("Node Api is running on port 5000");
});
