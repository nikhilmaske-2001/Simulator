const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

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

app.use("/server/users", userRoute);
app.use("/server/auth", authRoute);

app.listen(8800, () => {
  console.log(`Server is running on port: 8800`);
});
