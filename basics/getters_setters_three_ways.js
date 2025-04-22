// // class User {
// //   constructor(username, email) {
// //     this.username = username;
// //     this.email = email;
// //   }
// //   set username(username) {
// //     this._username = username;
// //   }
// //   get username() {
// //     return this._username;
// //   }
// //   set email(email) {
// //     this._email = email;
// //   }
// //   get email() {
// //     return this._email;
// //   }
// // }

// // const user = new User("deepak", "email@gmail.com");
// // console.log(user.email);
// // console.log(user.username);

// Object.defineProperty(User, "username", {
//   get: function () {
//     return this._username;
//   },
//   set: function (username) {
//     console.log(`setter of username was called`);
//     this._username = username;
//   },
// });

// Object.defineProperty(User, "email", {
//   get: function () {
//     return this._email;
//   },
//   set: function (email) {
//     console.log(`setter of email was called`);
//     this._email = email;
//   },
// });

// function User(username, email) {
//   this.username = username;
//   this.email = email;
// }

// const user = new User("deepak", "email@gmail.com");
// console.log(user);

const user = {
  username: "deepak",
  email: "email@gmail.com",

  set username(username) {
    this._username = username;
    console.log(`setter called of username`);
  },
  set email(email) {
    this._email = email;
    console.log(`setter called of email`);
  },
  get username() {
    console.log(`getter called`);
    return this._username;
  },
  get email() {
    console.log(`getter called`);
    return this._email;
  },
};

user.email = "gmail@email.com";
user.username = "bharath";
console.log(user.email);
console.log(user.username);
