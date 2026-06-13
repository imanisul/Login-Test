require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');


const app = express();

app.use(cors())

app.use(express.json());


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected  and running "))
  .catch(err => console.log(err));


module.exports = app;