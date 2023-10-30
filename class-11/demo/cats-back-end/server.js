'use strict'
// REQUIRE
require('dotenv').config();
const express = require('express');
const cors = require('cors');



//2. bring in mongoose.  
//npm install mongoose
const mongoose = require('mongoose');

//3. create models folder and files cat.js and seed.js and clear.js 

//4. Build out the cat.js

//5 bring in the models/cat.js   
// I must bring in a scheme if I want to interact with that model
const Cat = require('./models/cat.js');


//7. Now make sure we can connect to our      
//show password on mongo online Database access and show in browse collections where db name will show up
mongoose.set('strictQuery', true);
//8. Now make sure we can connect to our     
// connect Mongoose to ouur MongoDB
mongoose.connect(process.env.DB_URL);

//9. build seed data                          

//6. Now make sure we can connect to our     
// add validation to confirm we are wired up to our mongo DB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});



// USE
// implement express
const app = express();
// middleware
app.use(cors());
// define PORT validate env is working
const PORT = process.env.PORT || 3002;
// ROUTES
app.get('/', (request, response) => {
  response.status(200).send('Welcome!');
});





//10. Now make sure we can connect to our     

app.get('/cats', getCats);

async function getCats(req, res, next) {
  try {
    console.log('made it here');
    //look at docs 
    let results = await Cat.find();
    res.status(200).send(results);
  } catch(error) {
    next(error);
  }
}











//1. what is the purpose of a start route.  
app.get('*', (request, response) => {
  response.status(404).send('Not availabe');
});
// ERROR
app.use((error, request, response, next) => {
  res.status(500).send(error.message);
});
// LISTEN
app.listen(PORT, () => console.log(`listening on Port ${PORT}`));
