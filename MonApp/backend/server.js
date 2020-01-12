const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());



mongoose.connect('mongodb+srv://mouad:mouad@cluster0-totnk.mongodb.net/test?retryWrites=true&w=majority', 
{ useNewUrlParser: true ,useUnifiedTopology: true , useFindAndModify :false});
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("Connection established successfully to MongoDB");
})

let Todo = require('./todoRoute');
app.use('/todos', Todo);

let User = require('./userRoute')
app.use('/users' , User )

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});