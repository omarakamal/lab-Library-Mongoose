const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  pages: { type: Number, min: 20, max: 1000 },
  cover: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/800px-Open_book_nae_02.svg.png",
  },
  genres: [String],
  isBestSeller: { type: Boolean },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
