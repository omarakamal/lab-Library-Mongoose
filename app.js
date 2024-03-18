const express = require("express");
const logger = require("morgan");

const app = express();

// MIDDLEWARE
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.json());


// Iteration 1 - Connect to MongoDB
// DATABASE CONNECTION




//  Iteration 3 - Create a Book


//  Iteration 4 - Add Many Books


//  Iteration 5 - Get All Recipes


//  Iteration 6 - Get a Single Book


//  Iteration 7 - Update a Single Book


//  Iteration 8 - Delete a Single Recipe


// Start the server
app.listen(3000, () => console.log('My first app listening on port 3000!'));



//❗️DO NOT REMOVE THE BELOW CODE
module.exports = app;
