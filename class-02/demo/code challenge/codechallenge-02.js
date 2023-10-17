/**
Array.prototype.map


let newArray = arr.map(callback(currentValue[, index[, array]])){
  //return element for newArray, after executing some code. 
}


1. Identical in its structure to forEach.
2. Iterates over every element.
3. Map() puts items in the new array as it iterates, one for every element no matter what an array of 5 things, as the input will always have 5 things as the output. It's a forEach that makes arrays. 
4. map() is a built in method to call on arrays.
*/

const nums = [10, 30, 35, 50, 88];

const output = nums.map(() => 'I am returning now.');

console.log('output:', output);
console.log('nums array: ',nums);

//Tenent of functional programming, is that we dont change th original thing array

console.log('---------------------------');

nums.map((value, index, array) => {
console.log('V_I_A', value, index, array);

  return value * 7;
});
console.log('---------------------------');

let newNumsArray = nums.map(number => number * number);
console.log('line 36: nums array', newNumsArray);
console.log('---------------------------');


function callback(value, index){
  return value * index;
}
console.log('nums map callback: ', nums.map(callback));



/**
map() is great to pass info into our constructors
map will work with labs. 
one of the goals for today.
you will do this week. 
*/


function callback(value, index){
  // return value * value;
  //for below
  console.log('call back value and index', value, index);
  return value * index;
}

nums.map(callback);


function fakeMap(array, callback){
  const newArray = [];
    // console.log('this is the array ', array);

  for(let i = 0; i < array.length; i++){
     newArray.push(callback(array[i], i));
  }
    console.log('this is the newArray ', newArray);
  return newArray;
}

// fakeMap(nums, callback);
console.log('fake map: ',fakeMap(nums, callback));
