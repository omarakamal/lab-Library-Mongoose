const express = require("express");
const logger = require("morgan");

const app = express();

// MIDDLEWARE
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.json());

// Iteration 1 - Connect to MongoDB
// DATABASE CONNECTION
const mongoose = require("mongoose");
const Book = require("./models/Book.model");
const MONGODB_URI = "mongodb://127.0.0.1:27017/library-mongoose";
mongoose
  .connect(MONGODB_URI)
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

//  Iteration 3 - Create a Book
// Book.create({
//   title: "Harry Potter and the Deathly Hallows",
//   author: "JK Rowling",
//   pages: 607,
//   cover:
//     "https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg",
//   genres: ["Thriller", "Mystery"],
//   isBestSeller: true,
// })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//  Iteration 4 - Add Many Books

//  Iteration 5 - Get All Recipes

//  Iteration 6 - Get a Single Book

//  Iteration 7 - Update a Single Book

//  Iteration 8 - Delete a Single Recipe

// Start the server
app.listen(5005, () => console.log("My first app listening on port 3000!"));

//❗️DO NOT REMOVE THE BELOW CODE
module.exports = app;
