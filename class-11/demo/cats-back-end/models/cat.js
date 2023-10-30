// This is where I will declare my schema
// declare was the data should look like
// Like the header on a excel sheet
//1. Bring in mongoose
//2. Creat the schema to conform the data its our  dATA BOUNCER
//3. Define the Modal so that we can write code to the mongoose and 'use' the schema

'use strict';

//  bring in mongoose
const mongoose = require('mongoose');

//  extract the Schema property from the mongoose object
const { Schema } = mongoose;

const catSchema = new Schema ({
//  like the header of our table
  name: {type: String, required: true},
  color: {type: String, required: true},
  spayNeuter: {type: Boolean, required: true},
  location: {type: String, required: true}
});

//  define our model
//  this is what will give our database functionality. It will assign the predefined schema to shape our data.
// this method takes in two properties a string and a schema:
const CatModel = mongoose.model('Cat', catSchema);

module.exports = CatModel;


// const { Schema } = mongoose;

// const catSchema = new Schema({
//   name: String,
//   color: String,
//   hasClaws: Boolean,
//   location: String,
// });

// const Cat = mongoose.model('Cat', catSchema);

// module.exports = Cat;
