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


//Sort an array
let mySort = (...args) => args.sort( (a,b)=> a-b );
mySort(10,2,3); //=> [2,3,10]


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


//Dictionary
let findColor = name => ({ red:'#ff4444', blue: '#3b5998', yellow: '#fff68f' })[name];
findColor('red'); //=> #ff4444



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
    .key(function(d) { return d.year; })
    .sortKeys(d3.descending)
    .entries(yields);

nest;//-=> [{key: 1933, values: [{ variety: "Manchuria", year: 1933, site: "Morris" }] }]


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



//using slice to extract portions of an array
var arr = d3.range(50);

var portion = arr.slice(0, 10);//=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var portion2 = arr.slice(10, 20);//=> [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
var portion3 = arr.slice(20, 30);//=> [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
var portion4 = arr.slice(30, 40);//=> [30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
var portion5 = arr.slice(40, 50);//=> [40, 41, 42, 43, 44, 45, 46, 47, 48, 49]

