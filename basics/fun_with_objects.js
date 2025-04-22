// const result = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(result);
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// IT WAS THE REASON BY WHICH WE'RE UNABLE TO MODIFY THE PI VALUE.

// const user = {
//   username: "deepak",
// };

// Object.defineProperty(user, "email", {
//   value: "deepak@gmail.com",
//   writable: true,
//   enumerable: true,
// });

// Object.defineProperty(user, "password", {
//   value: "deepak@123",
//   writable: true,
//   enumerable: false,
// });

// for (const [key, value] of Object.entries(user)) {
//   console.log(`${key} :- ${value}`);
// }
