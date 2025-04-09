// objects which are created using constructor will be of type singleton
// objects which are created using literals are of type prototype.

const symbol = Symbol("12345")

const user1 = {
    name: "deepak",
    [symbol]: "symbol",
    age: 22,
    email: "email@gmail.com",
    hobbies: ["Listening and Singing songs", "Investing", "Exploring new Technologies"],
    isMarried: false,
    fullName: {
        firstName: "chintada",
        lastName: "deepak"
    }
}

const user2 = {
    name: "bobby",
    [symbol]: "symbol",
    age: 22,
    email: "email@gmail.com",
    hobbies: ["Listening and Singing songs", "Investing", "Exploring new Technologies"],
    isMarried: false,
    fullName: {
        firstName: "chintada",
        lastName: "deepak"
    }
}

// const user3 = Object.assign({}, user1, user2)
// const user3 = {...user1, ...user2}
console.log(Object.keys(user2));

console.log(Object.values(user2));
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