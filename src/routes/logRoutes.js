const express = require("express");
const path = require("path");
// const bcrypt = require("bcrypt");

const router = express.Router();

const users = [];

router.get("/login", (req, res) => {
  res.render(path.join(__dirname, "../ejs/login.ejs"));
});

router.get("/signup", (req, res) => {
  res.render(path.join(__dirname, "../ejs/signup.ejs"));
});

router.post("/signup", async (req, res) => {
  try {
    // const hashedPassword = await bcrypt.hash(req.body.password, 10, (err, hash) => {
    //   console.log(err);
    // });
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      phone: req.body.phone,
      password: req.body.password
    });
    res.redirect("/user/login");
  } catch {
    res.redirect("/user/signup");
  }
  console.log(users);
});

module.exports = router;
