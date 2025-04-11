// objects which are created using constructor will be of type singleton
// objects which are created using literals are of type prototype.

// const symbol = Symbol("12345")

// const user1 = {
//     isJavaDeveloper: true,
//     name: "deepak",
//     [symbol]: "symbol",
//     age: 22,
//     email: "email@gmail.com",
//     hobbies: ["Listening and Singing songs", "Investing", "Exploring new Technologies"],
//     isMarried: false,
//     fullName: {
//         firstName: "chintada",
//         lastName: "deepak"
//     }
// }

// const user2 = {
//     name: "bobby",
//     [symbol]: "symbol",
//     age: 22,
//     email: "email@gmail.com",
//     hobbies: ["Listening and Singing songs", "Investing", "Exploring new Technologies"],
//     isMarried: false,
//     fullName: {
//         firstName: "chintada",
//         lastName: "deepak"
//     }
// }

// const user3 = Object.assign({}, user1, user2)
// const user3 = {...user1, ...user2}
// console.log(Object.keys(user2));

// console.log(Object.values(user2));
// console.log(user3 === user1);
// console.log(user1);



// Object.freeze(user) // making an object unchangable
// user.email = "google@gmail.com"


// user.greet = function() {
//     console.log(`Welcome ${this.name}, Very Warm Welcome to you,..`);
// }


// // console.log(user["name"]); // recommended way than dot operator
// // console.log(typeof user.greet())
// user.greet()

// console.log(Object.entries(user1)); key value will be regarded as one entry.

// console.log(user1.hasOwnProperty("name")); // way to verify whether a key was exists or not.

// object de-structuring mean extracting some fields from the object.

// const {email, isJavaDeveloper: isJavaDev} = user1
// console.table([email, isJavaDev]);

// function addNumbers(...nums) { // the same three dots is also called as rest operator, 
// // based on situations it significance changes
//     return nums
// }

// console.log(addNumbers(2, 3, 4, 5, 6, 7))


// function first() {
//     const firstName = "deepak" // global scope
//     if(true) {
//         const lastName = "chintada"
//         console.log(firstName); // you will access of global variables inside the local scope, however vice versa is not true.
//     }
//     // console.log(lastName); // this not possible, as lastName scope is only within the IF block
// }


// first()


// hoisting

// first() // at this point, I was calling the function before declaration, point is it will work, however if you assign same function to variable and try to call it generates an error
// // this concept is called as hoisting, which talks about how functions are declared, execution context, tree structure of where variables and functions are stored

// function first() {
//     console.log("Hello World");
// }


// first()

// const first = function() {
//     console.log(
//         "Hello World"
//     );
    
// }

// this and arrow function
// this refers to current object reference or current object context
// context here is all about data stored

// const user = {
//     name: 'deepak',
//     greet: function() {
//         console.log(`${this.name}, Welcome and Have a great day.`);
//     }
//     // at this moment, this refers to user object, which contained the data and calling this method from outside
// }

// user.greet()
// user.name = "chintada" // at this point, you can see, I'm changing the context i.e data, automatically context will be updated, which is our this.
// user.greet()

// important topic, when it comes to this keyword.
// console.log(this);
// In node env, this keyword refers to empty object.
// In browser, this refers to global object - Window

// const first = function() {
//     console.log(this);
// }

// first()

// normal function

// const addTwoNumbers = function(num1, num2) {
//     return num1 + num2;
// }

// converting normal function to arrow function

// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2;
// }


// when you have only statement you can convert into lambda function.
// also instead of return keyword, you can put parenthesis, and remove return keywords

// const addTwoNumbers = (num1, num2) => ({
//     num1,
//     num2
// }); // wrap this line with parenthesis to return any kind of data, like objects and useful in react framework


// console.log(addTwoNumbers(3, 4));
