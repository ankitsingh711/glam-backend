const express = require("express");
const app = express();
const {connection} = require("./config/db");
require("dotenv").config();
const { UserRouter } = require("./router/user.router");
const cors = require("cors");
const bodyParser = require("body-parser");
const {ProductRouter} = require("./router/products.router");
// const {Authenticator} = require("./middleware/userAuth.middleware");

app.use(cors({origin:"*"}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());
app.use("/users", UserRouter);
// app.use(Authenticator);
app.use("/products", ProductRouter);


let port = process.env.PORT;
app.listen(port, async () => {
  try {
    await connection;
    console.log(`Connected to the DB`);
  } catch (error) {
    console.log(error);
    console.log("Error while connecting to DB");
  }
  console.log(`Server is running on port ${port}`);
});
