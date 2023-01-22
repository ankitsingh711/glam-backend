const mongoose = require("mongoose");

const womenSchema = mongoose.Schema({
  name: String,
  images:String,
  category:String,
  price:Number,
  discount:Number
},{versionKey:false});

const WomenModel = mongoose.model("women", womenSchema);

module.exports = { WomenModel };
