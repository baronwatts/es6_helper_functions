/*
Pure Functions 
1. Functions that don’t modify anything outside of themselves
2. Pass values as parameters, don’t store state in member variables
3. Always returning the same result for a given input
*/


/*
curry/partial application are both techniques for specializing a generalized function
*/


//curry - a returned function that accepts one arguments at a time on each call (chain of unary functions)
let getGradeTest = passGrade => failGrade => average => testScore => 
	testScore >= average ? passGrade : failGrade;

const passFailTester = getGradeTest('Pass')('Fail')(0.2); //returns the last function testScore(){};
passFailTester(0.19); //=> Fail
passFailTester(0.21); //=> Pass


let leftCurryDiv = n => d => n/d;
let divide10By = leftCurryDiv(10);
divide10By(2); //=> 5


let rightCurryDiv = d => n => n/d;
let divideBy10 = rightCurryDiv(10);
divideBy10(2); //=> 0.2



//partial application - provides some of the args now and all of the args on the next call
let partial = (f, ...args) => f.bind(null, ...args);
let volume = (a,b,c)=> a*b*c;
partial(volume,2)(3,4); //=> 24
partial(volume,2,3)(4); //=> 24




//pipe - executes functions from left to right
const pipe = (...fns) => (x) => fns.reduce((prev, func) => func(prev), x);
let double = x => x * 2;
let addTen = x => x + 10;
let doubleAndAddTen = pipe(double, addTen);
doubleAndAddTen(7); //=> 24
//OR pipe(double, addTen)(7); //=> 24



//compose - executes functions from right to left
const compose = (...fns) => fns.reduce((a, b) => (...c) => a(b(...c)));
let double = x => x * 2;
let addTen = x => x + 10;
let addTenAndDouble = compose(double, addTen);
addTenAndDouble(7); //=> 34
//OR compose(double, addTen)(7); //=> 34



//compose 2
let splitIntoSpaces = (str) => str.split(" ");
let count = (array) => array.length;
let countWords = compose(count,splitIntoSpaces);
countWords("hello your reading about composition"); //=> 5
//OR compose(count,splitIntoSpaces)("hello your reading about composition"); //=> 5


//Create range
let range = (start, end) => Array.from({ length: end + 1 - start }, (v, k) => start + k);
range(5, 10); //=> [5, 6, 7, 8, 9, 10]
range(5, 10).reverse(); //=> [10, 9, 8, 7, 6, 5]



//Generate a Random Number between..
let randnum = (min,max) => Math.round( Math.random() * (max-min) + min );
randnum(1,7); //=> outputs a random number between 1 and 7

let randStep = (min, max, step) => min + (step * Math.floor(Math.random()*(max-min)/step) );
//randStep(0, 100, 20);//=>0,20,40,60,80


//Check if number is odd
let isodd = (num) => num % 2 !=0 ? true : false;
isodd(7); //=> true


//Check if number is even
let iseven = (num) => num % 2 !=0 ? false : true;
iseven(4); //=> true


//Check first value in the array
let isFirstBiggest = xs => xs[0] == xs.sort((a,b)=>b-a)[0];
isFirstBiggest( [20.1, 5,4,3,2,1] ); //=> true


//Get random item in an array
let getRandArrayItem = (arr) => arr[ Math.floor(Math.random() * arr.length) ];
getRandArrayItem( ['red', 'blue', 'green', 'tan' ] ); //=> green


//Check if array has a specific item
let arrayhasItem = (array, item) => array.some(x=>x==item);
arrayhasItem( ['red', 'blue', 'green', 'tan' ], 'blue' ); //=> true


//Remove a specific item in an array
let removeArrayItem = (array, item) => array.filter(x => x != item);
removeArrayItem( ['red', 'blue', 'green', 'tan' ], 'tan' ); //=> ['red','blue','green']


//Shuffle an array
let shuffleArray = (arr) => arr.sort( () => (Math.random() - 0.5) );
shuffleArray(['a','b','c','d']); //=> ['d','a','c','b']


let checkEmptyArray = (arr) => !Array.isArray(arr) || arr.length === 0;

let arr1 = [1, 2, 3, 4, 5];
console.log(checkEmptyArray(arr1));//=>false
 
let arr2 = [];
console.log(checkEmptyArray(arr2));//=>true
 
let arr3 = [""];
console.log(checkEmptyArray(arr3));//=>false


//Sort an array
let mySort = (...args) => args.sort( (a,b)=> a-b );
mySort(10,2,3); //=> [2,3,10]


//Flatten an array
let flatten = arr => arr.reduce( (a, v) => a.concat(v), []);
flatten([1,[2],3,4,[10,20,30,40], 90]); //=> [1, 2, 3, 4, 10, 20, 30, 40, 90]


//Breaks down the array into chunks
let chunk = (arr, size) =>
  Array.apply(null, {length: Math.ceil(arr.length/size)}).map((v, i) => arr.slice(i*size, i*size+size));
chunk([1,2,3,4,5,9,8,7], 3); //=> [[1,2,3],[4,5,6], [7,8]]


//Counts how many times a value occures in an array
let countOccurrences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
countOccurrences([7,7,7,1,1,2,1,2,3,7], 7); //=> 4
countOccurrences(["cat", "dog", "moose", "Cat"].map(x=>x.toLowerCase()), "cat"); //=> 2



//Calculate the Euclidean distance between two points.
let distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
distance(1,1, 2,3); //=> 2.23606797749979


//Generate a random color
let genhexcolor = () => '#' + Math.floor(Math.random()*16777215).toString(16);
genhexcolor(); //=> #e53910


//Generate a random color
let genhsla = () => "hsla(" + Math.round(Math.random() * 360) + ", 50%, 50%, .5)";
genhsla(); //=> "hsla(88, 50%, 50%, .5)"


//factorial
let recursion = factorial => factorial <= 0 ? 1 : factorial * recursion(factorial - 1);
recursion(6); //=>720


//fibonacci
let fibonacci = n => n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
fibonacci(8); //=>34


//recursion
let countFrom = n => (n <= 0 ? 'Hello' : countFrom(n-1), console.log(n) );
countFrom(5); //=> 5 4 3 2 1 0 'Hello'


//recursion 
let printNumbers = (from,to) => ( from !== to ? printNumbers(from + 1, to) : console.log('counting from..'), console.log(from) );
printNumbers(3, 10); //=> 3 4 5 6 7 8 9 10


//repeat w/ custom delay
let repeat = num => ( num <= 1? 1: setTimeout( ()=>{repeat(num-1)}, 2000), console.log('Are We There Yet?') );
repeat(6);


//Get Average
let getAverage = tests => tests.reduce( (acc,elem) => acc + elem ) / tests.length;
getAverage( [10,20,30] ); //=> 20


//Multiply All
let calculate = (...n) => n.reduce( (a,b) => a*b );
calculate(10,10,20); //=> 2000


//sum up value
let arrObj = [
  {name: "deez", new: 1},
  {name: "deez", new: 4},
  {name: "deez", new: 6}
];

arrObj.map( (d,i)=> 
	( [d.new].reduce( (acc,elem) => acc + elem )) ).reduce( (a,b) => a+b ); //=> 11


//Dictionary
let findColor = name => ({ red:'#ff4444', blue: '#3b5998', yellow: '#fff68f' })[name];
findColor('red'); //=> #ff4444


//UUID Generator
let uuid = _ =>
  ( [1e7]+-1e3+-4e3+-8e3+-1e11 ).replace( /[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
uuid(); //=> '7982fcfe-5721-4632-bede-6000885be57d'


//Unique 
let unique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
unique([1,2,2,3,4,4,5]); //=> [1,3,5]
unique(['W', 'E', 'L', 'C', 'O', 'M', 'E', 'T', 'O', 'M', 'U', 'O']);//=>[ 'W', 'L', 'C', 'T', 'U' ]



//Similar
let similarity = (arr, values) => arr.filter(v => values.includes(v));
similarity([1,2,3], [1,2,4]); //=> [1,2]



//https://www.geodatasource.com/developers/javascript
let distance = (lat1, lon1, lat2, lon2, unit) => {
	var radlat1 = Math.PI * lat1/180
	var radlat2 = Math.PI * lat2/180
	var theta = lon1-lon2
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
	if (unit=="K") { dist = dist * 1.609344 }
	if (unit=="N") { dist = dist * 0.8684 }
	return dist
}

distance(32.9184,-117.1382,29.7002,-98.5878,"M"); //=> 1115.7791938769567



//Convert degrees to radians
//Radians = Degrees × π/180
let degreesToRadians = (deg) => (deg * Math.PI) / 180.0;
degreesToRadians(360);//=>6.283185307179586
degreesToRadians(180);//=>3.141592653589793
degreesToRadians(120);//=>2.0943951023931953


//Convert Radians to Degrees
//Degrees = Radians × 180/π
let radiansToDegrees = (rad) => (rad * 180) / Math.PI;
radiansToDegrees(6.283185307179586);//=>360
radiansToDegrees(3.141592653589793);//=>180
radiansToDegrees(2.0943951023931953);//=>119.99999999999999


//Miles to Kilos
let milesToKilometres = (dist) => Number((dist * 1.609).toFixed(1));


//Object to Array & Array to Object
let our_data = {
  "123456a": {
    name: "tim",
    age: 40,
    city: "Farmtown"
  },
  "123456b": {
    name: "jerry",
    age: 40,
    city: "Beachroad"
  },
  "123456c": {
    name: "bob",
    age: 30,
    city: "Busyville"
  }
}

let objToArray = (obj) => Object.keys(obj).map( key=>obj[key] );
let arrayToObject = (arr, keyField) => arr.reduce((obj, item) => (obj[item[keyField]] = item, obj), {});


let arr = objToArray(our_data);
let obj = arrayToObject(arr, 'name');

arr; //=> [ {},{},{} ]
obj; //=> { key:{},key:{},key:{} } 
obj['bob']; //=> {name: "bob", age: 30, city: "Busyville"}



//A for loop doesn't return an array
for(let i = 0; i < arr.length; i++){
  console.log( arr[i].name ); //=> tim jerry bob
}


//merge array of objects
let twerps = [
  {name: 'Angelique', age: 26},
  {name: 'Cheryl', age: 33},
  {name: 'Nalani', age: 27}
];


let getProp = name => object => object[name];
let result = twerps.map( getProp('age') ).join(', ');
result; //=> 26,33,27



//Array of indexes
Array.from( Array(4).keys() ); //=> [0,1,2,3]



//Loop over an object
let obj = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue'
};

for ( const [key, value] of Object.entries(obj) ) {
    console.log(`${key}: ${value}`); //=> outputs the object as a string
}


//Create an array of objects
let arrOfObj = new Array(5).fill(null).map(i => 
	({ 'age': randnum(18, 65), 'city': Math.random() >= 0.50 ? 'San Diego' : 'Houston' }));


//The (For in) loop returns the index and not the value
let obj = {
  "a": 1,
  "b": 2,
  "c": 3
};
let arr = ["a", "b", "c", "d"];
let str = "abcde";

for(var i in obj){
  console.log(i);
} // logs "a", "b", and "c"

for(var j in arr){
  console.log(j);
} // logs 0, 1, 2, and 3

for(var k in str){
  console.log(k);
} //logs 0, 1, 2, 3, and 4


//The (For of) loop returns the value. Doesn't work with objects
let arr = ["a", "b", "c", "d"];
let str = "abcde";

for(var j of arr){
  console.log(j);
} // logs "a", "b", "c", and "d"

for(var k of str){
  console.log(k);
} //logs "a", "b", "c", "d", and "e"



//Double String length in an array
let arr = ["a", "b", "c"];
arr.map(value => value.repeat(2)); // ["aa", "bb", "cc"]


//Split string by each index 
let str = "abc"
console.log([...str]) // prints ["a", "b", "c"]


//Unique set of array
let arr = ["a", "b", "b", "a", "c", "d", "c", "e"]
console.log([...new Set(arr)]); // [ 'a', 'b', 'c', 'd', 'e' ]


//Split an array on different characters 
let str = "aaabccdddddefffgggh"
console.log(srt.match(/(.)\1*/g)); // logs ["aaa", "b", "cc", "ddddd", "e", "fff", "ggg", "h"]



//D3
d3.entries({foo: 42, bar: true}); // [{key: "foo", value: 42}, {key: "bar", value: true}]
d3.zip([1, 2], [3, 4]); // returns [[1, 3], [2, 4]]
d3.pairs([1, 2, 3, 4]); // returns [[1, 2], [2, 3], [3, 4]]


//nest the elements first by year
var yields = [
  {yield: 27.00, variety: "Manchuria", year: 1931, site: "University Farm"},
  {yield: 48.87, variety: "Manchuria", year: 1932, site: "Waseca"},
  {yield: 27.43, variety: "Manchuria", year: 1933, site: "Morris"},
];
var nest = d3.nest()
    .key(function(d) { return d.year; })
    .key(function(d) { return d.variety; })
    .entries(yields);

nest;//-=> [{key: 1931, values: [{ key: "Manchuria", values: [{ site: "University Farm", variety: "Manchuria, year: 1931, yield: 27}] }]}]



//nest by year and sort by latest year
var yields = [
  {yield: 27.00, variety: "Manchuria", year: 1931, site: "University Farm"},
  {yield: 48.87, variety: "Manchuria", year: 1932, site: "Waseca"},
  {yield: 27.43, variety: "Manchuria", year: 1933, site: "Morris"},
];
var nest = d3.nest()
    .key( (d)=> d.year )
    .sortKeys(d3.descending)
    .entries(yields);

nest;//-=> [{key: 1933, values: [{ variety: "Manchuria", year: 1933, site: "Morris", yield: "27.43" }] }]





//rollup - takes all the individual value variables that are in each unique datefield and sums them
var yields = [
  {yield: 27.00, variety: "Manchuria", year: 1931, site: "University Farm"},
  {yield: 48.87, variety: "Manchuria", year: 1932, site: "Waseca"},
  {yield: 27.43, variety: "Manchuria", year: 1933, site: "Morris"},
];
var nest = d3.nest()
    .key( (d)=> d.year)
    .rollup( (d)=> d3.sum(d, (g)=>g.yield ))
    .entries(yields);

nest; //=> [{key: '1931', values: 27}, {key: '1932', values: 48.87}, {key: '1933', values: 27.43}]





//quantile
var a = [0, 1, 3];
d3.quantile(a, 0); // 0
d3.quantile(a, 0.5); // 1
d3.quantile(a, 1); // 3
d3.quantile(a, 0.25); // 0.5
d3.quantile(a, 0.75); // 2
d3.quantile(a, 0.1); // 0.19999999999999996


//cross
d3.cross([1, 2], ["x", "y"]); // returns [[1, "x"], [1, "y"], [2, "x"], [2, "y"]]
d3.cross([1, 2], ["x", "y"], (a, b) => a + b); // returns ["1x", "1y", "2x", "2y"]



//steps using d3.range. (startVal, endVal, stepVal)
d3.range(0, 1, 0.2);//=> [0, 0.2, 0.4, 0.6, 0.8]
d3.range(10, 15, 0.5);//=> [10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5]



//ES6 Fat Arrow
//`this` refers to the actual DOM element.
$("#b1").click(function () {
    $("li").each(function () {
        console.log(this);
    });
});
// <li>foo</li>
// <li>bar</li>



//`this` refers to the immediate enclosing lexical scope or the Parent scope
$("#b2").click(function () {
    $("li").each(() => console.log(this));
});

// <button id="b2"></button>
// <button id="b2"></button>




//generate random dates
let randDate = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toDateString();
randDate(new Date(2017, 0, 1), new Date());//=> Fri Jul 07 2017


//create d3.nest() type data structure
var our_data = d3.range(20).map(x=>
				({'key': Math.round(Math.random()*65), 
				  'values' : [{ 'date': randDate(new Date(2017, 0, 1), new Date()) }] 
				 })); //=> { key: 12, values: [{date: "Sat Aug 19 2017"}] }




//convert svg circle to a svg circle path
const circleToPath = (cx,cy,r) => `M${cx-r},${cy}a${r},${r} 0 1,0 ${r*2},0a${r},${r} 0 1,0 -${r*2},0`;

//circumference of a circle
//When a circle's radius is 1 it's called a unit circle. Its circumference is 2pi 
const calculateCircumference = (radius) => Math.PI * (radius + radius);
calculateCircumference(1);  // 6.283185307179586



//detect if ios
const appleBrowser = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
console.log(appleBrowser);//=>The statement will return true if your browser is running on an Apple device, otherwise, it'll return false.


//detect if darkmode
const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
console.log(darkMode);//=>The statement will return true if dark mode is running, otherwise, it'll return false.




//planetinfo.json
  {
   "description": "Planets in the solar system",
   "planets": [
     { "name": "Mercury",
       "aphelion": 69.8,
       "perihelion": 46.0,
       "radius": 2439,
       "moons": [0]
     },
	
//get desciption
fetch('./planetinfo.json')
 .then(response => response.json())
 .then(obj =>{
 console.log(obj.description);
 }).catch( err => console.error(err) );
	   



