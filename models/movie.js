const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    Title: String,
    Year: String,
    Rated: String,
    imdbRating: String,
    Poster: String,
    Plot: String
})

module.exports = mongoose.model('Movie', movieSchema)