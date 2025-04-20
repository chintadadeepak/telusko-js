class User {
  constructor(username) {
    this.username = username;
  }

  logUserDetails() {
    console.log(`USER DETAILS: ${this.username}`);
  }

  static generateUniqueUserId() {
    return Math.round(Math.random() * 1000);
  }
}

// class Developer extends User {
//   constructor(username, password, email) {
//     super(username);
//     this.password = password;
//     this.email = email;
//   }

//   logDevDetails() {
//     console.log(`DEV DETAILS: ${this.username} ${this.email}`);
//   }
// }

// const userOne = new User("deepak");
console.log(User.generateUniqueUserId());

// const devOne = new Developer("deepak", "12345", "deepak@developer.com");
// devOne.logDevDetails();

// IMPLEMENTING THE SAME USING FUNCTIONS
// function User(username, password, email) {
//   this.username = username;
// }

// function Developer(username, password, email) {
//   User.call(this, username);
//   this.password = password;
//   this.email = email;
// }

// Developer.prototype.logDevDetails = function () {
//   console.log(`USER DETAILS: ${this.username} ${this.email}`);
// };

// const devOne = new Developer("deepak", "12345", "deepak@gmail.com");
// devOne.logDevDetails();
