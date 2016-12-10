

//Generate a Random Number between..
let randnum = (min,max) => Math.random() * (max-min) + min;


//Check if number is odd
let isodd = (num) => num % 2 !=0 ? true : false;


//Check if number is even
let iseven = (num) => num % 2 !=0 ? false : true;


//Get random ite in an array
let getRandArrayItem = (arr) => arr[ Math.floor(Math.random() * arr.length) ];


//Check if array has a specific item
let arrayhasItem = (array, item) => {
  let i = array.indexOf(item);
  return i != -1 ? true : false;  
} 


//Remove random a specific item in an array
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











    
