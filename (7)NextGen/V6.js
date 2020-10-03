// =========
// Maps
// =========

// const question = new Map();
// question.set('question', 'What is the official name of the latest major JS Version?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set('true', 'Correct Answer!');
// question.set('false', 'Wrong, please try again!');

// console.log(question.get('question'));
// console.log(question.size);

// if (question.has(4)) {
//   question.delete(4);
//   console.log('Answer 4');
// }
// question.clear();

// question.forEach((val, key) => {
//   console.log(`This is the ${key}, and it's set to ${val}`);
// });

// for (let [key, val] of question.entries()) {
//   if (typeof (key) === 'number') {
//     console.log(`Answer ${key}: ${val}`)
//   }
// }

// const ans = parseInt(prompt('Write the Correct Answer!'));
// console.log(question.get(`${ans === question.get('correct')}`));

// =========
// Classes
// =========

// // ES5
// var Person5 = function (name, yearOB, job) {
//   this.name = name;
//   this.yearOB = yearOB;
//   this.job = job;
// };
// Person5.prototype.calcAge = function () {
//   var age = new Date().getFullYear() - this.yearOB;
//   console.log(age);
// };
// var john5 = new Person5('John', 1990, 'Teacher');

// // ES6
// class Person6 {
//   constructor(name, yearOB, job) {
//     this.name = name;
//     this.yearOB = yearOB;
//     this.job = job;
//   }

//   calcAge() {
//     var age = new Date().getFullYear() - this.yearOB;
//     console.log(age);
//   }

//   static greeting() {
//     console.log('Hey There!');
//   }
// }
// var john6 = new Person6('John', 1990, 'Teacher');

// console.log(john5, john6);
// Person6.greeting();

// ======================
// Classes & Sub-Classes
// ======================

// // ES5
// var Person5 = function (name, yearOB, job) {
//   this.name = name;
//   this.yearOB = yearOB;
//   this.job = job;
// };
// Person5.prototype.calcAge = function () {
//   var age = new Date().getFullYear() - this.yearOB;
//   console.log(age);
// };

// var Athlete5 = function (name, yearOB, job, olympicGames, medals) {
//   Person5.call(this, name, yearOB, job);
//   this.olympicGames = olympicGames;
//   this.medals = medals;
// };
// Athlete5.prototype = Object.create(Person5.prototype);
// Athlete5.prototype.wonMedal = function () {
//   this.medals++;
//   console.log(this.medals);
// }

// var john5 = new Athlete5('John', 1990, 'Swimmer', 3, 10);
// john5.calcAge();
// john5.wonMedal();

// ES6
class Person6 {
  constructor(name, yearOB, job) {
    this.name = name;
    this.yearOB = yearOB;
    this.job = job;
  }

  calcAge() {
    var age = new Date().getFullYear() - this.yearOB;
    console.log(age);
  }
}

class Athlete6 extends Person6 {
  constructor(name, yearOB, job, olympicGames, medals) {
    super(name, yearOB, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
};

const john6 = new Athlete6('John', 1990, 'Swimmer', 3, 10);
john6.calcAge();
john6.wonMedal();

