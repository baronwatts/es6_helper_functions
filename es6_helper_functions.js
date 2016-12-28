//Generate a Random Number between..
let randnum = (min,max) => Math.random() * (max-min) + min;


//Check if number is odd
let isodd = (num) => num % 2 !=0 ? true : false;


//Check if number is even
let iseven = (num) => num % 2 !=0 ? false : true;


//Get random item in an array
let getRandArrayItem = (arr) => arr[ Math.floor(Math.random() * arr.length) ];


//Check if array has a specific item
let arrayhasItem = (array, item) => {
  let i = array.indexOf(item);
  return i != -1 ? true : false;  
} 


//Remove a specific item in an array
let removeRandArrayItem = (array, item) => {
  let i = array.indexOf(item);

  if(i != -1) array.splice(i, 1);
  return array;
} 


//Shuffle an array
let shufflearray = (array) => {
   for(let i = array.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


//Generate a random color
let genhexcolor = () => {
  let hexarray = '1234567890ABCDEF',
      hexcolor = '#';

  hexarray = hexarray.split('');
      
  for(let i = 6; i--;){
    hexcolor += hexarray[Math.floor(Math.random()*hexarray.length)];
  }
  return hexcolor;
}




//setInterval
let setIntervals = (callback, seconds, len) => {
  let i = 0, interval = setInterval(function () {
    if (i < len) {
      callback();
      i++;
    } else {
      clearInterval(interval);
    }
  }, seconds);
}

// logs 'hi!' every 1000ms only 5 times 
setIntervals(function(){console.log('hi!')}, 1000, 5);


//increment counter
let countUp = (() => {
  let count = 0;
  return () => ++count;
})();


//calculate params
let calculate = (...n) => {
  let base = Number(...n),
        len = n.length,
        i = 1;
        
  while(i < len){
    base *= n[i];
    i++;
  }
  console.log(base);
}



//factorial
let recursion = (factorial) => {
  let result = factorial <= 0 ? 1 :  factorial * recursion(factorial - 1);
  return result;
}
console.log( recursion(6) );


//fibonacci
let fibonacci = (n) => {
  let result = n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
  return result;
}
console.log( fibonacci(8) );



//merge arrays
let a = [1,2,3];
let b = [4,5,6];

a.push(...b);

console.log(a);


//merge array of objects
let twerps = [
  {name: 'Angelique', age: 26},
  {name: 'Cheryl', age: 33},
  {name: 'Nalani', age: 27}
];

let prop = (name) => {
  return function(object){
    //same as object.name
    return object[name];
  }
}

let result = twerps.map( prop('age') ).join(', ');

console.log(result);



//merge objects to array
let dataObject = {
  object1: { id: 1, name: 'Fred'},
  object2: { id: 2, name: 'Wilma'},
  object3: { id: 3, name: 'Pebbles'}
};

let dataArray = Object.keys(dataObject).map( n=> dataObject[n] );

console.log(dataArray);



//object keys
let data = {
  name: 'Baron',
  age: 30,
  occupation: 'Developer'
};



//array of key names
let key = Object.keys(data);
console.log(key);



//key names (non array)
for(let i = 0; i < key.length; i++){
  console.log( key[i] );
}



//recursion
let countFrom = (n) => {
  console.log(n);
  let result = n <= 0 ? 'Hello' : countFrom(n-1);
  return result;
}
console.log( countFrom(21) );



//recursion 
let printNumbers = (from,to) =>{
  console.log(from);
  if (from !== to) printNumbers(from + 1, to);
}
printNumbers(1, 100);



//string
let x = `Bond`;
let bondline = `my name is ${x} , James ${x}`;
console.log(bondline);


//while loop
let myArray = [2,4,6,8,10,12],
      len = myArray.length,
      counter = 0;
      
while(counter < len){
  console.log( myArray[counter] );
  counter++;
}

while(len--){
  console.log( myArray[len] );
}


//todo
let todoList = [];

let rememberTo = (task) => {
  todoList.push(task);
  console.log( todoList );
}

let urgentlyRememberTo = (task) => {
  todoList.unshift(task);
  console.log(todoList);
}

let whatIsNext = () => console.log( todoList.shift() );

rememberTo('buy ticket');


//map
let nums = [1,3,9];
let result = nums.map( n => n * 2);

console.log(result);


//create object map
let map = {};
let storePhi = (event,phi) => map[event] = phi;
storePhi('pizza', 0.069);
storePhi('touched tree', -0.081);

console.log('pizza' in map);
console.log(map['touched tree']);


//curry
//a curried function is one that returns a new function for every logical argument that it takes
let leftCurryDiv = (n) =>{
  return (d) => n/d;
}

let rightCurryDiv = (d) =>{
  return (n) => n/d;
}

let divide10By = leftCurryDiv(10);
console.log( divide10By(2) );

let divideBy10 = rightCurryDiv(10);
console.log( divideBy10(2) );



//for loop
let arr = [4,5,6,7,8,9];
for(let v of arr){
  console.log(v);
}




//image preloader
let numOfImgs = 9;
for (let i = 1; i <= numOfImgs; i++) {
  let img = document.createElement('img');
  let item = document.createElement('div');
  
  //increments image height based on i
  img.src = 'https://placehold.it/650x45' + i;
  //add image inside div
  item.appendChild(img);

  //add to the DOM
  document.body.appendChild(item);

};


//fizzbuzz
for ( let i=1; i<=100; i++ ) {
  let mod3   = i%3 === 0,
      mod5   = i%5 === 0,
      result = mod3 && mod5 ? 'fizzbuzz' : mod3 ? 'fizz' : mod5 ? 'buzz' : i;

  console.log( result );
}




//document fragment - Bypass recalculating, painting and layout for every single element we add.
let el, i = 0; fragment = document.createDocumentFragment();

while (i < 200) {
    el = document.createElement('li');
    el.innerText = 'This is my list item number ' + i;
    fragment.appendChild(el);
    i++; 
}
document.body.appendChild(fragment);
