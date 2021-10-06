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

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.send("Welcome to Home page");
});

app.get("/users", (req, res) => {
  res.send("Welcome to users page");
});

app.listen(8800, () => {
  console.log(`Server is running on port: 8800`);
});
