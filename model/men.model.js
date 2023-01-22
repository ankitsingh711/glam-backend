const mongoose = require("mongoose");

const menShema = mongoose.Schema({
  name: String,
  strike_price: Number,
  price: Number,
  rating: Number,
  price_off: String,
  no_of_products: Number,
  thumbnail: String,
},{versionKey:false});

const MenModel = mongoose.model("men", menShema);

module.exports = { MenModel };
