// This is where I will declare my schema
// declare what the data should look like
// Like the header on a excel spread sheet
//1. Bring in mongoose
//2. Creat the schema to conform the data its our  dATA BOUNCER
//3. Define the Modal so that we can write code to the mongoose and 'use' the schema
'use strict';
//  bring in mongoose
const mongoose = require('mongoose');
//  extract the Schema property from the mongoose object
const {Schema} = mongoose;

//  define our model
//  this is what will give our database functionality. It will assign the predefined schema to shape our data.
let catSchema = new Schema({
//  like the header of our table
  name: {type: String, required: true},
  color: {type: String, required: true},
  spayNeuter: {type: Boolean, required: true},
  location: {type: String, required: true}
});

//export our model the so rest of the server can use it.
const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
