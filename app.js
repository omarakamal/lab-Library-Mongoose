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

const MONGODB_URI = "mongodb://127.0.0.1:27017/library-mongoose";

mongoose
  .connect(MONGODB_URI)
  .then((res) =>
    console.log(
      `Connected to Mongo! Database name: "${res.connections[0].name}"`
    )
  )
  .catch((err) => {
    console.log("Error connecting to mongo", err);
  });

// import model
const Book = require("./models/Book.model.js");

//  Iteration 3 - Create a Book
const newBook = {
  title: "Harry Potter and the Deathly Hallows",
  author: "JK Rowling",
  pages: 607,
  cover:
    " https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg",
  genres: ["Thriller", "Mystery"],
  isBestSeller: true,
};

// Book.create(newBook)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//  Iteration 4 - Add Many Books
const newBooks = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    cover: "https://example.com/greatgatsbycover.jpg",
    genres: ["Classic", "Fiction"],
    isBestSeller: true,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
    cover: "https://example.com/tokillamockingbirdcover.jpg",
    genres: ["Classic", "Fiction", "Drama"],
    isBestSeller: true,
  },
  {
    title: "1984",
    author: "George Orwell",
    pages: 328,
    cover: "https://example.com/1984cover.jpg",
    genres: ["Classic", "Science Fiction", "Dystopian"],
    isBestSeller: true,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 300,
    cover: "https://example.com/thehobbitcover.jpg",
    genres: ["Fantasy", "Adventure"],
    isBestSeller: true,
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    pages: 332,
    cover: "https://example.com/harrypottercover.jpg",
    genres: ["Fantasy", "Young Adult"],
    isBestSeller: true,
  },
];

// Book.insertMany(newBooks)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//  Iteration 5 - Get All Recipes
Book.find()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//  Iteration 6 - Get a Single Book
Book.findById("65f9f47e8357ee89ca37be39")
.then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//  Iteration 7 - Update a Single Book
// Book.updateOne({_id:"65f9f47e8357ee89ca37be39"}, {pages:750})
// .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//  Iteration 8 - Delete a Single Recipe
Book.deleteOne({title:"The Hobbit"})
.then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Start the server
app.listen(5005, () => console.log("My first app listening on port 3000!"));

//❗️DO NOT REMOVE THE BELOW CODE
module.exports = app;
