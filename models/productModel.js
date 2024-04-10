// use mongoose to interact with the database
const mongoose = require("mongoose");

//create a schema
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      //if they dont enter a name display that message
      required: [true, "Please Enter a product name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  // to create two fields created_At = when data is added to the database
  // updated_At = when data is modified
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
