/*

Phase 1 -> An Introduction to JavaScript
by Sakib Rasul
Updated March 12, 2024
Created August 21, 2023

Core Deliverables
1. Learn about variables, types, arrays, conditional statements,
   functions, and scope.
2. Complete the three challanges.

*/

// ~ Variables
// -> constants, variables, logging, annotations
// const, let

/**
 * I'm writing something!
 * Annotating the following line
 */
const apples = 65;
console.log(apples);
// apples = 5; // Not allowed because apples is constant.
let books = 5;
books = 25; // Allowed because books is not constant.
console.log(books);

// ~ Types
// -> undefined, null*, boolean, number, string

// ~ Objects
// -> definition, bracket/dot notation, stringify
// An object is a collection of values tahat represent something.
// Use case: whenever something can't be described with only one value.
// Contains key:value pairs
// Objects do NOT maintain the order of the key:value pairs.
const animal = {
    species: "dog",
    name: "Spot",
    age: 4,
    isWellBehaved: true
};
console.log(animal);
// Dot notation
console.log(animal.age);
// Bracket notation: Need key to be in quotes because it's a key, not a defined variable.
console.log(animal["age"]);
// String interpolation
console.log(`${animal.name} is ${animal.age} years old!`)
// Concatenation
console.log(animal.name + " is " + animal.age + " years old!")
// JSON.stringify() converts input into a string
// Better than .toString() because JSON is a readable text file across lots of platforms (easier for sending)
console.log(JSON.stringify(animal));

// ~ Arrays
// -> definition, access, modification
// An array is a list of ordered values that don't have names (ie. keys)
const prices = [ 43, 56, 32, 23 ];
console.log(prices);
console.log(JSON.stringify(prices)); // JSON.stringify() to convert to string
console.log(prices[2]); // Bracket notation to access values

// The contents of objects & arrays can be modified, even though they're declared as constants. 
animal.isWellBehaved = false;
animal.weight = 150;
console.log(animal);

prices[0] = 5;
console.log(prices);

// ~ Conditionals
// if, if-else, if-else-if-else, ternary
// if (boolean) { someCodeThatShouldRunIfTrue }
const isItSunny = true;
if (isItSunny) { 
    console.log("Wear sunglasses!");
} else {
    console.log("Stay inside.");
};
// Ternary: boolean ? assignmentIfTrue : assignmentIfFalse
// Use ternary when assigning different values to variables
const action = isItSunny ? "Wear sunglasses!" : "Stay inside.";
console.log("The action is " + action)

// ~ Functions
// -> name, parameters, body, return, annotations
// -> methods, forEach, callback functions, anonymous functions
/**
 * 
 * @param {string} name The person to greet.
 * @param {number} age The person's age.
 * @returns The number 100.
 */
function sayHello(name, age){
    console.log("Hi, " + name + "! You're " + age + " years old.")
    return 100;
}

console.log(sayHello("Sakib", 4));

function square(number){
    console.log(number*number);
}

const integers = [ 1, 2, 3, 4 ];
// integers.forEach(square);
integers.forEach((number) => {console.log(number*number); }); // anon fn as a param


// ~ Scope
// -> global, local, closures, function hoisting
// Curly braces (functions, objects) create values in local scope
const x =5;

function func(){
    console.log(x);
}


// CHALLENGES
// Try these practice problems on your own to reinforce this lesson's material :)
// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.
// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.
// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.


console.log("Challenge 1")

function sum(numbers){
    let total = 0;
    for ( let i = 0; i < numbers.length; i++ ) {
        total = total + numbers[i];
    }
    return total;
}

// Sakib's answer
function sum2(numbers){
    let total = 0;
    numbers.forEach((digit) => {total += digit});
    return total;
} 

const testNumbers = [5, 6, 23, 44];
// console.log("for loop method: " + sum(testNumbers));
console.log(sum([1, 2, 3]) + 1);

// console.log("forEach method: " + sum2(testNumbers));
console.log(sum2([1, 2, 3]) + 1);

console.log("Challenge 2")
function double(numbers){
    for (let i = 0; i < numbers.length; i++){
        numbers[i] = numbers[i]*2;
    }
    return numbers; // not needed - nothing asked to return
}

function double2(numbers){
    numbers.forEach((value, index, array) => {
        array[index]=value*2});
    return numbers; // not needed - nothing asked to return
}

// Sakib's answer
function double3(numbers){
    let index = 0; 
    numbers.forEach(num => {
        nums[index] = num * 2;
        index++;
    });
};

// Sakib's improved answer - reduces time because you don't have to iterate index
function double4(numbers) {
    numbers.forEach((num, i) => {
        numbers[i] = num * 2;
    })
}

console.log(double([2, 4, 6]));
console.log(double2([2, 4, 6]));



console.log("Challenge 3")
function lowercase(words) {
    const newArray = [];
    for (let i = 0; i < words.length; i++){
        newArray[i] = words[i].toLowerCase();
    }
    return newArray;
}

function lowercase2(words) {
    const newArray = [];
    words.forEach((value) => {newArray.push(value.toLowerCase())})
    return newArray;
}

// Sakib's answer
function lowercase3(words) {
    let lowercased = [];
    let index = 0;
    words.forEach(word => {
        lowercased[index] = word.toLowerCase();
        index++;
    })
    return lowercased;
}

// Sakib's improved answer
function lowercase4(words) {
    let lowercased = [];
    words.forEach((word, i) => {
        lowercased[i] = word.toLowerCase();
    })
    return lowercased;
}

// Sakib's even better answer
// Uses map() which creates a new array
// Map requires a returned value to make an element of the new array
// Map can take in multiple paramaters like forEach (value, index, array)
function lowercase5(words) {
    return words.map(word => {
        return word.toLowerCase() // can remove "return" and "{}" because toLowerCase() already returns the correct value
    });
}

const testArray = ["gorilla", "Box", "square"];
console.log(lowercase(testArray)); // ["gorilla", "box", "square"]
console.log(lowercase2(testArray)); // ["gorilla", "box", "square"]