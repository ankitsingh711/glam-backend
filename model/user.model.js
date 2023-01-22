const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name : String,
    email : {type:String, unique:true},
    password : {type:String, min:6}
}, {versionKey:false});

const UserModel = mongoose.model("users", userSchema);

module.exports = { UserModel };
