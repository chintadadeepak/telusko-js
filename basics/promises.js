// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log(`first promise creation`);
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log(`first promise consumed`);
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log(`second promise creation without reference`);
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log(`second promise consumed`);
// });

// const thirdPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log(`third promise creation without reference`);
//     resolve({ username: "deepak", password: "12345" });
//   }, 1000);
// });

// thirdPromise
//   .then(function (user) {
//     console.log(`third promise consumed`);
//     return user.username;
//   })
//   .then(function (username) {
//     console.log(`received username: ${username}, from parent then()`);
//   });

// const fourthPromise = new Promise(function (resolve, reject) {
//   const error = true;
//   if (!error) {
//     setTimeout(function () {
//       console.log(`first promise creation`);
//       resolve();
//     }, 1000);
//   } else {
//     reject(`Oops, something went wrong`);
//   }
// });

// fourthPromise
//   .then(function () {
//     console.log(`fourth promise consumed`);
//   })
//   .catch(function (errorMessage) {
//     console.log(`response from async function: ${errorMessage}`);
//   });

// async function fifthPromise() {
//   try {
//     setTimeout(function () {
//       return "async process executed";
//     }, 0);
//   } catch (error) {
//     return error;
//   }
// }

// fetch("https://api.github.com/users/hiteshchoudhary")
//   .then(function (response) {
//     console.log(response.body);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
