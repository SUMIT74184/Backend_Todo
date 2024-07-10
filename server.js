//Server Instantiate
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// const bodyParser = require("body-parser");
// app.use(bodyParser.json()); //sepcifically parse Json data &add it

//middleware to parse json request body
app.use(express.json());
//import routes for the TODO api

const todoRoutes = require("./routes/todos");
//mount the todo api
app.use("/api/v1", todoRoutes);

// activate the server on port
app.listen(PORT, () => {
  console.log(`server started at port successfully at ${PORT}`);
});

//db connnection
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/", (req, res) => {
  res.send(`<h1>welcome to the dashboard</h1>`);
});

// // Routes
// app.get("/", (req, res) => {
//   res.send("hello sumit how are you");
// });

// app.post("/api/cars", (req, res) => {
//   const { name, brand } = req.body;
//   console.log(name);
//   console.log(brand);
//   res.send("car submitted successfully");
// });

// const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://localhost:27017/sumitdatabase", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connection successful");
//   })
//   .catch((err) => {
//     console.log("Received an error:", err);
//   });
