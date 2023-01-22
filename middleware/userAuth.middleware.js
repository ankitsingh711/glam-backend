const jwt = require("jsonwebtoken");
require("dotenv").config();

const Authenticator = (req, res, next) => {
  let token = req.headers.authorization;
  try {
    jwt.verify(token, process.env.Key, (err, decoded) => {
      if (err) {
        console.log(err);
        res.send("Unauthorized User");
      } else {
        let userId = decoded.userID;
        req.body.userID = userId;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.send("Error in token");
  }
};

module.exports = { Authenticator };
