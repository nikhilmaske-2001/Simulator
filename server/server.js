const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("MongoDB is connected");
  }
);

app.listen(process.env.PORT || 8800, () => {
  console.log(`Server is running on port`);
});
