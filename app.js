const express = require("express");
const logger = require("morgan");
const mongoose = require('mongoose')
const Book = require('./models/Book.model')

const app = express();

// MIDDLEWARE
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.json());


// Iteration 1 - Connect to MongoDB
// DATABASE CONNECTION

const MONGODB_URI = "mongodb://127.0.0.1:27017/library-mongoose";

mongoose
  .connect(MONGODB_URI)
  .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch((err) => console.error("Error connecting to mongo", err));


//  Iteration 3 - Create a Book

// Book.create({
//     title:"Harry Potter and the Deathly Hallows",
//     author:"JK Rowling",
//     pages:607,
//     cover:'https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg',
//     genres:["Thriller","Mystery"],
//     isBestSeller:true
// })
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

//  Iteration 4 - Add Many Books

// Book.insertMany([
//     {
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       pages: 180,
//       cover: "https://example.com/greatgatsbycover.jpg",
//       genres: ["Classic", "Fiction"],
//       isBestSeller: true
//     },
//     {
//       title: "To Kill a Mockingbird",
//       author: "Harper Lee",
//       pages: 281,
//       cover: "https://example.com/tokillamockingbirdcover.jpg",
//       genres: ["Classic", "Fiction", "Drama"],
//       isBestSeller: true
//     },
//     {
//       title: "1984",
//       author: "George Orwell",
//       pages: 328,
//       cover: "https://example.com/1984cover.jpg",
//       genres: ["Classic", "Science Fiction", "Dystopian"],
//       isBestSeller: true
//     },
//     {
//       title: "The Hobbit",
//       author: "J.R.R. Tolkien",
//       pages: 300,
//       cover: "https://example.com/thehobbitcover.jpg",
//       genres: ["Fantasy", "Adventure"],
//       isBestSeller: true
//     },
//     {
//       title: "Harry Potter and the Philosopher's Stone",
//       author: "J.K. Rowling",
//       pages: 332,
//       cover: "https://example.com/harrypottercover.jpg",
//       genres: ["Fantasy", "Young Adult"],
//       isBestSeller: true
//     }
//   ])
//   .then((res)=>{
//     console.log(res)
//   })
//   .catch((err)=>{
//     console.log(err)
//   })

//  Iteration 5 - Get All Recipes

// Book.find()
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

//  Iteration 6 - Get a Single Book

// Book.findOne({title:"Harry Potter and the Deathly Hallows"})
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

//  Iteration 7 - Update a Single Book

// Book.findOneAndUpdate({title: "Harry Potter and the Deathly Hallows"}, {pages: 750}, {new: true})
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

//  Iteration 8 - Delete a Single Recipe

Book.deleteOne({title:"The Hobbit"})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})

// Start the server
app.listen(5005, () => console.log('My first app listening on port 3000!'));



//❗️DO NOT REMOVE THE BELOW CODE
module.exports = app;
