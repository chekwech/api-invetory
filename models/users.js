const mongoose = require("mongoose");
const usersSchema =require("./schemas/usersSchema");

const User = mongoose.model("users", usersSchema);



module.exports = User;



















