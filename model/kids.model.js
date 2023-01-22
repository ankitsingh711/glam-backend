const mongoose = require("mongoose");

const kidsShema = mongoose.Schema({
  name: String,
  strike_price: Number,
  price: Number,
  rating: Number,
  price_off: String,
  no_of_products: Number,
  thumbnail: String,
},{versionKey:false});

const KidsModel = mongoose.model("kid", kidsShema);

module.exports = { KidsModel };
