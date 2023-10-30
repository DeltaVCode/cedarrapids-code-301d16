'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const Cat = require('./models/cat.js');

async function seed() {
  //name: {type: String, required: true},
  //color: {type: String, required: true},
  //spayNeuter: {type: Boolean, required: true},
  //location: {type: String, required: true}

  // const myCat = new Cat({
  //   name: 'Jimmy John',
  //   color: 'orange',
  //   hasClaws: false,
  //   location: 'Seattle',
  // });
  // myCat.save(function (err) {
  //   if (err) console.error(err);
  //   else console.log('saved Jimmy John');
  // });

  await Cat.create({
    name: 'Tony the Tiger',
    color: 'Black and White and Orange',
    spayNeuter: false,
    location: 'Seattle'
  });
  console.log('Tony the Tiger was added');

  await Cat.create({
    name: 'Garfield',
    color: 'orange',
    spayNeuter: true,
    location: 'Ohio'
  });
  console.log('Garfield was added');

  await Cat.create({
    name: 'Pink Pather',
    color: 'Hot pink and pink',
    spayNeuter: false,
    location: 'World Wide West Side'
  });

  console.log('Pinkee was added');

  //leaving things running can cost money. turn off this connection
  mongoose.disconnect();
}

seed();
//to run this file in the terminal  type   'node seed.js'
