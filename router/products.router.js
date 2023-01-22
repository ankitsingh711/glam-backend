const express = require("express");
const app = express();
const ProductRouter = express.Router();
const { WomenModel } = require("../model/women.model");
const { MenModel } = require("../model/men.model");
const { KidsModel } = require("../model/kids.model");
const { KitchenModel } = require("../model/kitchen.model");
const { BeautyModel } = require("../model/beauty.model");

app.use(express.json());

ProductRouter.post("/create", async (req, res) => {
  const {
    name,
    strike_price,
    price,
    rating,
    price_off,
    no_of_products,
    thumbnail,
  } = req.body;
  try {
    const data = new MenModel({
      name,
      strike_price,
      price,
      rating,
      price_off,
      no_of_products,
      thumbnail,
    });
    await data.save();
    res.send("Data added");
  } catch (error) {
    console.log(error);
    res.send("Error while adding data");
  }
});

ProductRouter.get("/beauty/:id", async (req, res) => {
  const prodId = req.params.id;
//   const ID = prodId.toString();
//   console.log(typeof ID)
  try {
    const data = await BeautyModel.findOne({id:prodId});
    res.send(data);
  } catch (error) {
    console.log;
  }
});

ProductRouter.get("/women", async (req, res) => {
  const query = req.query.price;
  try {
    if (query === "asc") {
      const data = await WomenModel.find().sort({ price: 1 });
      res.send(data);
    } else if (query === "dsc") {
      const data = await WomenModel.find().sort({ price: -1 });
      res.send(data);
    } else {
      const data = await WomenModel.find();
      res.send(data);
    }
  } catch (error) {
    console.log(error);
    res.send("Error while getting all products");
  }
});

ProductRouter.get("/women/:id", async (req, res) => {
  const prodId = req.params.id;
  try {
    const data = await WomenModel.find({ _id: prodId });
    res.send(data);
  } catch (error) {
    console.log;
  }
});

ProductRouter.get("/beauty", async (req, res) => {
  const query = req.query.price;
  const low = req.query.low;
  const high = req.query.high;
  const category = req.query.category;
  try {
    if (query === "asc") {
      const data = await BeautyModel.find().sort({ price: 1 });
      res.send(data);
    } else if (query === "dsc") {
      const data = await BeautyModel.find().sort({ price: -1 });
      res.send(data);
    }else if(low && high){
      const data = await BeautyModel.find({price:{$gte:low,$lte:high}});
      res.send(data);
    } else if(category){
      const data = await BeautyModel.find({category:category});
      res.send(data);
    }
    else {
      const data = await BeautyModel.find();
      res.send(data);
    }
  } catch (error) {
    console.log(error);
    res.send("Error while getting all products");
  }
});


ProductRouter.get("/men", async (req, res) => {
  const query = req.query.price;
  try {
    if (query === "asc") {
      const data = await MenModel.find().sort({ price: 1 });
      res.send(data);
    } else if (query === "dsc") {
      const data = await MenModel.find().sort({ price: -1 });
      res.send(data);
    } else {
      const data = await MenModel.find();
      res.send(data);
    }
  } catch (error) {
    console.log(error);
    res.send();
  }
});

ProductRouter.get("/kids", async (req, res) => {
  const query = req.query.price;
  try {
    if (query === "asc") {
      const data = await KidsModel.find().sort({ price: 1 });
      res.send(data);
    } else if (query === "dsc") {
      const data = await KidsModel.find().sort({ price: -1 });
      res.send(data);
    } else {
      const data = await KidsModel.find();
      res.send(data);
    }
  } catch (error) {
    console.log(error);
    res.send("Error while getting all products");
  }
});

ProductRouter.get("/kitchen", async (req, res) => {
  const query = req.query.price;
  try {
    if (query === "asc") {
      const data = await KitchenModel.find().sort({ price: 1 });
      res.send(data);
    } else if (query === "dsc") {
      const data = await KitchenModel.find().sort({ price: -1 });
      res.send(data);
    } else {
      const data = await KitchenModel.find();
      res.send(data);
    }
  } catch (error) {
    console.log(error);
    res.send("Error while getting all products");
  }
});

module.exports = { ProductRouter };
