const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const password = process.env.REACT_APP_MONGO_PASSWORD;

const DB = `mongodb+srv://nikhil:${password}@sim.fnq0f.mongodb.net/sim?retryWrites=true&w=majority`;

mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(() => {
    console.log('connection successfull');
}).catch((error) => {
    console.log(error);
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});