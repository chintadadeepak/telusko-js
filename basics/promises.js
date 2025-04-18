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

// const fifthPromise = new Promise(function (resolve, reject) {
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

// async function consumeFifthPromise() {
//   try {
//     const response = await fifthPromise;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumeFifthPromise();

// async function fetchGithubProfileData() {
//   try {
//     const response = await fetch("https://api.github.com/users/chintadadeepak");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchGithubProfileData();

// handling above function with .then and .catch

fetch(`https://api.github.com/users/chintadadeepak`)
  .then((response) => {
    return response.json();
  })
  .then((actualData) => console.log(actualData))
  .catch((error) => console.log(`${error} : OOPS, SOMETHING WENT WRONG!`));
