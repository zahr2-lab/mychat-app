const mongoose = require("mongoose");

const User = require("./models/user");

mongoose.connect(
  "mongodb://127.0.0.1:27017/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log("connected");
  }
);

const getUsers = async (req, res, next) => {
  const users = await User.find().exec();
  res.json(users);
};

const createUsers = async (req, res, next) => {
  const createdUser = new User({
    name: req.body.name,
    password: req.body.password
  });
  const resault = await createdUser.save();
  res.json(resault);
};

exports.getUsers = getUsers;
exports.createUsers = createUsers;
