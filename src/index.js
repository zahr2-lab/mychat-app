const express = require("express");
const bodyParser = require("body-parser");
const logRoutes = require("./routes/logRoutes");
const path = require("path");
// const mongo = require("./mongoose");

const app = express();

app.use(bodyParser.json());
app.set("view-engine", "ejs");

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "/ejs/index.ejs"));
});

app.use("/user", logRoutes);

// app.post("/add/user", mongo.createUsers);

// app.get("/users", mongo.getUsers);

app.listen(8080);
