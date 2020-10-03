// =======================
// Function Constructors
// =======================

// // According to the Convention in JS, we always write function constructors with a capital letter
// var Person = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }

// Person.prototype.calculateAge = function () {
//   console.log(2020 - this.yearOfBirth);
// }

// Person.prototype.lastName = 'Smith'

// // We call this process Instantiation, because the John object is an instance of the Person object.
// var john = new Person('John', 1990, 'Teacher');
// var jane = new Person('Jane', 1969, 'Designer');
// var mark = new Person('Jane', 1948, 'Retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

// ================
// Object.create()
// ================

// var personProto = {
//   calcAge: function () {
//     console.log(2020 - this.yearOfBirth);
//   }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'Teacher';

// var jane = Object.create(personProto, {
//   name: { value: 'Jane' },
//   yearOfBirth: { value: 1969 },
//   job: { value: 'Designer' },
// });

// ======================
// Primitives VS Objects
// ======================

// // In case of primitives, each variable holds it's own copy of data. So change in one variable, won't affect the other.
// var a = 23;
// var b = a;
// a = 46;
// console.log(a, b);

// // In case of objects, all the variables which are equal to one another, hold the reference to the same object in the memory, instead of having their own individual copies, like primitives.
// var obj1 = {
//   name: 'John',
//   age: 26
// };
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1);
// console.log(obj2);

// // As seen above, when we pass a primitive to a function, a copy of it is passed ino the function. However, in case of objects, a reference to the object is passed into the function. So any change in case of primitive won't be reflected on the outside, while in case of object, it will be.
// var age = 27;
// var obj = {
//   name: 'Jonas',
//   city: 'Lisbon'
// };
// function change(a, b) {
//   a = 30;
//   b.city = 'San Francisco';
// }
// change(age, obj);
// console.log(age, obj.city);

// ===============================
// Passing functions as Arguments
// ===============================

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calcAge(el) {
//   return 2020 - el;
// };
// function isFullAge(el) {
//   return el >= 18;
// }
// function maxHeartRate(el) {
//   if (el >= 18 && el <= 81)
//     return Math.round(206.9 - (0.67 * el));
//   return -1;
// }

// var ages = arrayCalc(years, calcAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);
// console.log(ages, fullAges, rates);

// ===============================
// Functions returning Functions
// ===============================

// function intQuestions(job) {
//   if (job === 'designer') {
//     return function (name) {
//       console.log(`${name}, can you please explain what UX design is?`);
//     }
//   } else if (job === 'teacher') {
//     return function (name) {
//       console.log(`What subject do you teach, ${name}?`);
//     }
//   } else {
//     return function (name) {
//       console.log(`Hello, ${name}, what do you do?`);
//     }
//   }
// };

// var teacherQuestion = intQuestions('teacher');
// var designerQuestion = intQuestions('designer')
// teacherQuestion('John');
// designerQuestion('John');

// intQuestions('teacher')('Mark');

// ===============================================
// Immediately Invoked Function Expressions(IIFE)
// ===============================================

// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// };
// game();

// // This is an example of IIFE. We wrap the function inside () to make sure that the JS parser, thinks that it's not a function declaration. So we have implemented something like Data Privacy, and in this manner, we don't interfere with the Global Execution Context as well.
// (function () {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();

// // It will give an error
// // console.log(score); 

// (function (goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(5);

// =========
// Closures
// =========

// function retirement(retAge) {
//   var a = ' years until retirement.'
//   return function (yob) {
//     var age = 2020 - yob;
//     console.log((retAge - age) + a);
//   }
// };

// var retUS = retirement(66);
// var retGermany = retirement(65);
// var retIceland = retirement(67);
// retUS(1990);
// retGermany(1990);
// retIceland(1990);


// function intQuestions(job) {
//   var a = 'Hello';
//   return function (name) {
//     if (job === 'designer')
//       console.log(`${a}, ${name}, can you please explain, what is meant by UX design?`);
//     else if (job === 'teacher')
//       console.log(`${a}, ${name}, can you please tell, what subject do you teach?`);
//     else
//       console.log(`${a}, ${name}, what do you do?`);
//   }
// }

// var desInterview = intQuestions('designer');
// var teaInterview = intQuestions('teacher');
// var elseInterview = intQuestions('web developer');
// desInterview('Mark');
// teaInterview('John');
// elseInterview('Twain');

// =====================
// Bind, Call and Apply
// =====================

var john = {
  name: 'John',
  age: 26,
  job: 'Teacher',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log(`Good ${timeOfDay}, Ladies and Gentlemen! I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old!`);
    } else if (style === 'friendly') {
      console.log(`Hey, what's up! I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old. Have a nice ${timeOfDay}!`);
    }
  }
};

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
}

john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');

// The apply method won't work as of now, cause the function we have written, doesn't expect an array of Arguments.
// john.presentation.apply(emily, ['friendly', 'afternoon']);

// This below process where we use the bind method is known as Carrying, where we create a function, based on another function, with some preset parameters.
var johnFriendly = john.presentation.bind(john, 'friendly');
var emilyFormal = john.presentation.bind(emily, 'formal');
johnFriendly('night');
emilyFormal('morning');


var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calcAge(el) {
  return 2020 - el;
};
function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calcAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages, fullJapan);
