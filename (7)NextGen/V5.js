// ================
// Destructuring
// ================

// // ES5
// var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// // ES6 -> Array Destructuring
// const [name, year] = ['John', 26];
// console.log(name, year);

// // ES6 -> Object Destructuring
// const obj = {
//   firstName: 'John',
//   lastName: 'Smith'
// };
// const { firstName, lastName } = obj;
// console.log(firstName, lastName);

// const { firstName: a, lastName: b } = obj;
// console.log(a, b);

// // How can we use the concept of Destructuring when returning Multiple Values from a function
// function caclAgeRet(year) {
//   const age = new Date().getFullYear() - year;
//   return [age, 65 - age];
// };
// const [age, ret] = caclAgeRet(1990);
// console.log(age, ret);

// ========
// Arrays
// ========

// const boxes = document.querySelectorAll('.box');

// // ES5 -> We would have to use call method to convert a nodeList into an Array
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function (cur) {
//   cur.style.backgroundColor = 'dodgerblue';
// });

// // ES6 -> We can simply use the Array.from method to convert a nodeList into an Array.
// var boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// // ES5 -> We can't use CONTINUE and BREAK statements in either map, or forEach
// for (var i = 0; i < boxesArr5.length; i++) {
//   if (boxesArr5[i].className === 'box blue')
//     continue;
//   boxesArr5[i].textContent = 'I Changed to Blue';
// }

// // ES6
// for (const cur of boxesArr6) {
//   if (cur.className.includes('blue'))
//     continue;
//   cur.textContent = 'I Changed to Blue!';
// };

// var ages = [12, 17, 8, 21, 14, 11];

// // ES5
// var full = ages.map(function (cur) {
//   return cur >= 18;
// });
// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// // ES6
// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));

// =================
// Spread Operator
// =================

// function addFourAges(a, b, c, d) {
//   return a + b + c + d;
// };
// var sum1 = addFourAges(18, 12, 12, 43);
// console.log(sum1);

// // ES5
// var ages = [18, 12, 12, 43];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// // ES6 -> We can use the Spread Operator, to pass the arguements in the form of an Array to a function.
// const sum3 = addFourAges(...ages);
// console.log(sum3);

// // ES6 -> We can also use the Spread Operator to concat arrays.
// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Bob', 'Mary', 'Anne'];
// const bigFamily = [...familySmith, 'Lily', ...familyMiller];
// console.log(bigFamily);

// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('box');
// const all = [h, ...boxes];
// Array.from(all).forEach(cur => cur.style.color = 'purple');

// =================
// Rest Parameters
// =================

// ES5
// function isFullAge5() {
//   var argsArr = Array.prototype.slice.call(arguments);
//   argsArr.forEach(function (cur) {
//     console.log((2020 - cur) >= 18);
//   });
// };
// isFullAge5(1990, 2008, 1993);

// // ES6
// function isFullAge6(...years) {
//   years.forEach(cur => console.log((2020 - cur) >= 18));
// };
// isFullAge6(1990, 2008, 1993);

// // ES5
// function isFullAge5(limit) {
//   var argsArr = Array.prototype.slice.call(arguments, 1);
//   argsArr.forEach(function (cur) {
//     console.log((2020 - cur) >= limit);
//   });
// };
// isFullAge5(21, 1990, 2008, 1993);

// // ES6
// function isFullAge6(limit, ...years) {
//   years.forEach(cur => console.log((2020 - cur) >= limit));
// };
// isFullAge6(21, 1990, 2008, 1993);

// ===================
// Default Parameters
// ===================

// // ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

//   lastName === undefined ? lastName = 'Smith' : lastName;
//   nationality === undefined ? nationality = 'American' : nationality;

//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.nationality = nationality;
// };
// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
// console.log(john, emily);

// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
};
var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
console.log(john, emily);
