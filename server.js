//Server
const server = require("express")();

server.listen(3000, () => {
  console.log("Server is running...");
});

//Database
const mongoose = require("mongoose");
require("dotenv/config");

mongoose.connect(process.env.DATABASE_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("Database connection established!");
});

//Middleware
const parser = require("body-parser");
const cors = require("cors");

server.use(cors());
server.use(parser.json());

//Routes
const user = require("./routes/user");

server.use("/users", user);