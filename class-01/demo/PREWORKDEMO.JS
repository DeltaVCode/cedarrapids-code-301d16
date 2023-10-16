'use strict';


//Hoisting
//vanilla Js function declaration
//whats the difference between the two when it comes to hoisting?


//will this work?
console.log(add(4,7));



function add(a,b){
  return a + b;
}

//
let myAdd = function(a,b){
  return a + b;
}
console.log(myAdd(4,7));

//arrow functions
//arrow functions are anonymous functions
//multi-line arrow functions need curly braces...
let arrowAdd = (a,b) => {
  //'this' is refering to things outside the function. Can be useful with classes. Scope is on the class object. we will talk about that more later. 
  return a + b;
}

let arrowAdd2 = (a,b) => a + b;

console.log(arrowAdd2(5,5));

//this will refer to the context to which its declared. so plain old 201 constructor you can use this to refer to the instance of the object that is being created. this will refer to stuff outside of the arrow function itself.


//class constructor 
class MusicianClass {
  constructor(artist, style){
    this.artist = artist;
    this.style = style;
    this.isAmazing = true;
  }
  // be right back
  //remember that outside our constructor we can add functions.
  makeItFunky = () => {
    console.log('Get up, get into it and get involved!');
  }
  
}
// let classGodFather = new MusicianClass('James Brown', 'Funk');
// console.log('our class object',classGodFather.makeItFunky());


//whats nice about classes is that our class constructors can be extended. 
//parent child classes where children can inherit there parents attributes. 

class MusicGroup extends MusicianClass {
  constructor(artist, style, members){
    //parent class provides these
    super(artist, style);
      this.members = members;
  }
  help = () => {
    console.log('I need somebody!');
  }
}

let beatles = new MusicGroup('Beatles', 'Rock and Roll', ['john', 'paul', 'george', 'ringo']);
console.log(beatles);

beatles.help();