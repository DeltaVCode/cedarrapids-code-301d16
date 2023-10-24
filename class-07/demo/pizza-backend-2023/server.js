//add all the stuff to run the server
'use strict';
console.log('server is connected!!!');

//Requires
// in our requires we have to use 'require instead of import
// here we will list the requirements for a server

const express = require('express');
require('dotenv').config();
let data = require('./pizzaData/data.json');
console.log(data);
const cors = require('cors');


//use
const app = express();
//set up the server to serve on a port
const PORT = process.env.PORT || 5005;
app.use(cors());


/**
 * once we have required something, we have to use it this is where we assign the required file a variable name REact does this in one step with import
 * it says we must use it and assign it a var
 * with Express takes 2 steps : 'require' then 'use'
 * this is just how express works.
 */



//ROUTES is what we use to access our end points
/**
 * .get() is an express method
 * it correlates to axios.get
 * the first param is a url in quote
 * the second is a callback 90
 * / is the root of our server
 *
 * npm i -g nodemon
 */

app.get('/', (request, response) => {
//we want to send something back
  response.send('Hello from the server!');
});

app.get('/pizza', (request, response) =>{
  try {
    let pizzaType = request.query.pizzatype;
    console.log('did we get pizza from the front end?',pizzaType);
    //send to class           find pizza     frontend     === from our data
    let dataToInstant = data.find(pizza => pizza.pizzatype === pizzaType);
    console.log(dataToInstant);
    let dataToSend = new Pizza(dataToInstant);
    console.log('front end data',dataToSend);
    response.send(dataToSend);
  } catch (error) {
    // eslint-disable-next-line no-undef
    next(error);
  }
});



class Pizza {
  constructor(pizzaObject){
    console.log('!!!!!!',pizzaObject);
    this.pizzaType = pizzaObject.pizzatype;
    this.location = pizzaObject.location;
  }

}




//errors
// eslint-disable-next-line no-unused-vars
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});



app.get('*', (request, response) => {
  response.send('the route does not exsist, sorry. ERROR 404');
});

//listen() is a method in express
app.listen(PORT, ()=> console.log(`Listening on PORT ${PORT}`));
