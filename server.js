const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path = require('path');
// const morgan = require('morgan')
// app.use(morgan('dev'))
app.use(express.json())

app.use('/movie', require("./routes/movieRouter.js"))

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"))
})

mongoose.connect('mongodb+srv://maw000:iIAEOO2Ruz6g0iaC@cluster0.wwpfnsl.mongodb.net/movies?retryWrites=true&w=majority',{useNewUrlParser: true})
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));

app.listen(process.env.PORT || 5000, () => {
    console.log('This server is working')
})