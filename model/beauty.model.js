const mongoose = require("mongoose");

const beautyShema = mongoose.Schema({
  name: String,
  image: String,
  des: String,
  rating: Number,
  price: Number,
  category: String,
  id: Number,
  customer_category:Number,
  discount:Number
},{versionKey:false});

const BeautyModel = mongoose.model("beauty", beautyShema);

module.exports = { BeautyModel };
