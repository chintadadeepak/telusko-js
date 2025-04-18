// OOPS - OBJECT ORIENTED PROGRAMMING, IT'S A PROGRAMMING STYLE
// OBJECT - IT'S A MEMORY BLOCK, INSIDE THE HEAD MEMORY, WHICH CONTAINS INSTANCES AND FUNCTIONS OF A CLASS, AND THEY ARE ACCESSED THROUGH THE OBJECT.
// CLASS - CONTAINER WHICH CONTAINS INSTANCES AND METHODS
// MAIN BLOCKS OF OOPS
// ABSTRACTION - HIDING THE INTERNAL DETAILS
// ENCAPSULATION - BINDING OF DATA WITH METHODS.
// INHERITANCE - SIGNIFICANCE IS TO REDUCE THE REDUNDANCY, THROUGH PARENT-CHILD RELATION
// POLYMORPHISM - DIFFERENT BEHAVIOUR OF A REFERENCE VARIABLE, BASED UPON THE OBJECT ASSIGNED TO IT.
// CONSTRUCTOR - FUNCTION WHICH WILL BE CALLED IMPLICITLY AT THE MEMORY ALLOCATION

// const user = {
//   id: "1",
//   name: "deepak",
//   age: 22,
//   greetUser: function () {
//     console.log(`Welcome, ${this.name}`);
//   },
// };

// console.log(this);
// console.log(user);
// user.greetUser();

function User(id, name, age) {
  this.id = id;
  this.name = name;
  this.age = age;
//   return this;
}

const userOne = new User(1, "deepak", 22);
// console.log(userOne);
const userTwo = new User(2, "bharath", 19);
console.log(userOne);
console.log(userTwo);
