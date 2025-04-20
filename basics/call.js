function SetUserName(username) {
  w
//   console.log(this);
}

function CreateUser(username, email, password) {
  SetUserName.call(this, username);
  console.log(this);
  this.password = password;
  this.email = email;
}

const user = new CreateUser("deepak", "deepak@gmail.com", "630045");
console.log(user);
