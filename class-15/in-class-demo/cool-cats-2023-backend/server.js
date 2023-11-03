'use strict';
console.log('server file is connected, but not neccessarily up on its PORT');

require('dotenv').config();
const express = require('express');
const cors = require('cors');
//use

//implement express .get(), .use(), .post(), .delete()

const app = express();
//middle wear
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5555;


const mongoose = require('mongoose');
//database connect
const Cat = require('./models/cat');
const verifyUser = require('./auth.js');
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
app.post('/cats', postCats);
app.delete('/cats/:id', deleteCats);
//add the put
app.put('/cats/:id', putCats);






async function putCats(request, response, next){
  try {
    //we need to pull out the id from       params.
    //then we need the data which is in the body.
    //id and body live on the REQUEST object and we are just using them to pass data from the front to our server
    let id = request.params.id;
    let dataToUpdate = request.body;
    // console.log('JJJJJJJJJJ',id, dataToUpdate);
    //now that we have our thing to update lets contact mongo using mongoose...
    // findByIdAndUpdate()
    // takes in 3 arguments
    // 1.is the id
    // 2.is the data to update
    //3. we need to give it some options object over write the whole data object not just part of the object / record in the db. so we get a new version and replace the old one.
    //this is a put not a patch(more efficient)
    let updatedCat = await Cat.findByIdAndUpdate(id,dataToUpdate,{new:true,overwrite:true});
    // console.log('back from the db update: ',updatedCat);
    response.status(200).send(updatedCat);
  } catch (error) {
    next(error);
  }
}














// this needs to go in the 'body' of our request object....
//{
//   "name": "BOB",
//   "color":"Blue",
//   "spayNeuter": true,
//   "location": "the streets"
// }
// async function getCats(req, res, next){
//   try {
//      console.log('we made it to the get Cats');
//     let dataBaseResults = await Cat.find();
//     console.log('DATA?',dataBaseResults);
//     res.status(200).send(dataBaseResults);
//   } catch (error) {
//     next(error);
//   }
// }
// to use verification functionality, paste your exsisting code inside of this function
/**
verifyUser(req, async (err, user) => {
  if(err){
    console.log(err);
    res.send('invalid token');
  } else {
    //paste your code here.
  }
});
*/


async function getCats(req, res, next){
  // eslint-disable-next-line no-unused-vars
  verifyUser(req, async (err, user) => {
    if(err){
      console.log(err);
      res.send('invalid token');
    } else {
    //paste your code here.
      try {
        // console.log('we made it to the get Cats');
        let dataBaseResults = await Cat.find();
        // console.log('DATA?',dataBaseResults);
        res.status(200).send(dataBaseResults);
      } catch (error) {
        next(error);
      }
    }
  });
}







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




























app.get('*', (req,res) => {
  res.status(404).send('Not Found');
});

// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});


app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
