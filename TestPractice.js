let age = 20;

if (age < 18) {
  console.log("Minor");
} else {
  console.log("Adult");
}

let myage = 10;
if (myage < 18) {
  console.log("You are minor");
} else {
  console.log("You are now Adult");
}

let myage1 = 20;
if (myage1 < 18) {
  console.log(" Hey thers You are minor");
} else {
  console.log("Hey you are now Adult");
}

let a = 15;
let b = 9;

if (a > b) {
  console.log("a is larger");
} else {
  console.log("b is larger");
}

let marks = 32;

if (marks >= 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}

let mark = 39;

if (mark > 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}

let n=10;
if (n > 0) {
  console.log("Positive");
} else if (n < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

let num = 7;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// let user = "admin";
// let pass = "123";

// if (user === "admin" && pass === "123") {
//   console.log("Login Success");
// } else {
//   console.log("Invalid Login");
// }

//Simple Authentication
let email = "test@gmail.com";
let pwd = "1111";

if (email === "test@gmail.com") {
  if (pwd === "1111") console.log("Login Success");
  else console.log("Wrong Password");
} else console.log("Wrong Email");
