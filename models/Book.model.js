const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title:String,
    author:String,
    pages:Number,
    cover: {
        type:String,
        default:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/800px-Open_book_nae_02.svg.png'
    },
    genres:[String],
    isBestSeller: {
        type: Boolean,
        default: false
    }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
