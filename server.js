//Server.js will be entry point of app

const express = require('express')
const mongoose = require('mongoose')
const app = express(); //Transfer contents of Exptress into app
const routes = require('./routes/routes');

//Takes in base endpoint and contents of routes. All endpoints will start from /api
app.use('/api', routes); //Could be a point of error

//Database URI
const uri = "mongodb+srv://TripleThreat:Tyl3r@softengfall2022-triplet.c1ph4p1.mongodb.net/?retryWrites=true&w=majority";

//Old Connection
/*
async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

connect();

app.listen(3000, () => {console.log("Server started on port 3000");}); */

mongoose.connect(uri);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log('Database Connected');
})

//Allows us to accept data in JSON format
app.use(express.json());

//Listen to changes of file on port 3000
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

