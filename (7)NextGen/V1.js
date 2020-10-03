// ==============
// LET and CONST
// ==============

// // ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// // ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);

// // ES5
// function driversLicence5(passedTest) {
//   if (passedTest) {
//     console.log(firstName);
//     var firstName = 'John';
//     var yearOfBirth = 1990;
//   }
//   console.log(`${firstName} born in ${yearOfBirth} is now officialy allowed to drive a Car.`);
// };
// driversLicence5(true);

// // ES6 -> It won't work cause the variables declared & defined using let and const keyword, are block-scoped instead of function-scoped, that is we can access them, only within the block in which they are defined. Also, a block is defined as a pair of parenthesis.
// function driversLicence6(passedTest) {
//   if (passedTest) {
//     let firstName = 'John';
//     const yearOfBirth = 1990;
//   }
//   console.log(`${firstName} born in ${yearOfBirth} is now officialy allowed to drive a Car.`);
// };
// driversLicence6(true);

// // ES6 -> It won't work as well, cause in case of LET, we can declare variables without defining them, and can define them later, but in case of CONST, we have to define them at the time of declaration only.
// function driversLicence6(passedTest) {
//   let firstName;
//   const yearOfBirth;

//   if (passedTest) {
//     firstName = 'John';
//     yearOfBirth = 1990
//   }
//   console.log(`${firstName} born in ${yearOfBirth} is now officialy allowed to drive a Car.`);
// };
// driversLicence6(true);

// // ES6 -> It won't work as well, cause in case of LET and CONST, we can't use the variables before they are declared.
// function driversLicence6(passedTest) {
//   console.log(firstName);
//   let firstName;
//   const yearOfBirth = 1990;

//   if (passedTest) {
//     firstName = 'John';
//   }
//   console.log(`${firstName} born in ${yearOfBirth} is now officialy allowed to drive a Car.`);
// };
// driversLicence6(true);

// // ES5
// var i = 23;
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);

// ES6
let i = 23;
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);