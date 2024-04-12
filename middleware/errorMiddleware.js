// middleware is a concept where functions can be used to process incoming
//requests before they reach their final destination and handle
//outgoing responses before they are sent back to the client.

const errorMiddleware = (err, req, res, next) => {
  //console.log("Here is an error middleware");
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    //change error during production to null
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};

module.exports = errorMiddleware;
