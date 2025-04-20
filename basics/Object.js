// function createUser(username, age) {
//   this.username = username;
//   this.age = age;
// }

// const user = {
//   username: "deepak",
// };

// user.deepak = function () {
//   console.log(`username: ${this.username}`);
// };

// user.deepak();

// createUser.prototype.incrementAge = function () {
//   this.age++;
// };

// createUser.prototype.fetchUsername = function () {
//   return this.username;
// };

// const userOne = new createUser("deepak", 22);
// const userTwo = new createUser("bharath", 19);

// userOne.incrementAge();
// console.log(userTwo.fetchUsername());
// console.log(userOne, userTwo);

// const myName = new String("deepak");
// myName.prototype.displayFirstThreeCharacters = function () {
//   if (this.length >= 3) console.log(this.slice(0, 3));
//   else console.log(`${this.length} was less than 3.`);
// };

// myName.displayFirstThreeCharacters();

// const user = {
//   username: "deepak",
// };

// Object.prototype.displayObject = function () {
//   console.log(`object which called me: ${this[1]}`);
// };

// const myName = ["deepak", "bharath"];
// // user.displayObject();
// myName.displayObject();

// Object.prototype.stringWithoutSpaces = function () {
//   let result = "";
//   for (let i = 0; i < this.length; i++)
//     result += this[i] !== " " ? this[i] : "";
//   return result;
// };

// String.prototype.stringWithoutSpaces = function () {
//   let result = "";
//   for (let i = 0; i < this.length; i++)
//     result += this[i] !== " " ? this[i] : "";
//   return result;
// };

// String.prototype.sayHello = function () {
//   console.log(`Say Hello`);
// };

// const myName = "   deepak  ";
// console.log(myName.stringWithoutSpaces().length);
// user.sayHello();

const Human = {
  name: "human-being",
  age: 18,
  nationality: "Indian",
};

const Teacher = {
  specializedSubject: "Physics",
  commonCommunicationLanguage: "English",
};

// OUTDATED SYNTAX
// Teacher.__proto__ = Human;
// console.log(Teacher.age);
Object.setPrototypeOf(Teacher, Human);
console.log(Teacher.nationality);
