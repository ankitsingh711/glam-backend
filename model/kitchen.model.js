const mongoose = require("mongoose");

const kitchenShema = mongoose.Schema({
  name: String,
  strike_price: Number,
  price: Number,
  rating: Number,
  price_off: String,
  no_of_products: Number,
  thumbnail: String,
},{versionKey:false});

const KitchenModel = mongoose.model("kitchen", kitchenShema);

module.exports = { KitchenModel };
