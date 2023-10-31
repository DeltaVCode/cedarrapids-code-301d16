'use strict';
console.log('server file is connected, but not neccessarily up on its PORT');

require('dotenv').config();
const express = require('express');
const cors = require('cors');
//use
//implement express .get(), .use(), .post(), delete()

const app = express();
//middle wear
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5555;


const mongoose = require('mongoose');
//database connect
const Cat = require('./models/cat');

//1. Now make sure we can connect to our show password on mongo online Database access and show in browse collections where db name will show up
// mongoose.set('strictQuery', true);
//2. Now make sure we can connect to our connect Mongoose to ouur MongoDB
mongoose.connect(process.env.DB_URL);

//3. Now make sure we can connect to our
// add validation to confirm we are wired up to our mongo DB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

//routes

app.get('/', (req, res) => res.status(200).send('Hello from the Server!'));
app.get('/cats', getCats);
//POST to create a new Cat
app.post('/cats', postCats);
//DELETE
app.delete('/cats/:id', deleteCats);




// this needs to go in the 'body' of our request object....
//{
//   "name": "BOB",
//   "color":"Blue",
//   "spayNeuter": true,
//   "location": "the streets"
// }



async function postCats(req,res,next){
  console.log(req,'from our post cat is firing');
  // create a new database entry with the object from our front end
  // we do this by passing our data in the KEY: 'body' of our request object
  console.log('data object in the url', req.body);
  try {
    let createCat = await Cat.create(req.body);
    console.log('after the database',createCat);
    res.status(200).send(createCat);
  } catch (error) {
    next(error);
  }
}





async function deleteCats(req,res,next){
  try {
    console.log(req.params.id);
    let id = req.params.id;
    await Cat.findByIdAndDelete(id);
    res.status(200).send('Cat was Deleted');
  } catch (error) {
    next(error);
  }

}















async function getCats(req, res, next){
  try {
    // console.log('we made it to the get Cats');
    let dataBaseResults = await Cat.find();
    // console.log('DATA?',dataBaseResults);
    res.status(200).send(dataBaseResults);
  } catch (error) {
    next(error);
  }
}













app.get('*', (req,res) => {
  res.status(404).send('Not Found');
});

// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});


app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
