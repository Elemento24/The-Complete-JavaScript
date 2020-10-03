// ================
// Arrow Functions
// ================

// const years = [1990, 1965, 1982, 1937];

// // ES6
// let ages6 = years.map(el => 2016 - el);
// console.log(ages6);

// ages6 = years.map((el, ind) => `Age Element ${ind + 1}: ${2016 - el}`);
// console.log(ages6);

// ages6 = years.map((el, ind) => {
//   const now = new Date().getFullYear();
//   const age = now - el;
//   return `Age Element ${ind + 1} ${age}`;
// });
// console.log(ages6);

// ==========================
// Arrow Functions -> THIS
// ==========================

// // ES5
// var box5 = {
//   color: 'green',
//   position: 1,
//   clickMe: function () {
//     var self = this;
//     document.querySelector('.green').addEventListener('click', function () {
//       var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//       alert(str);
//     })
//   }
// };
// box6.clickMe();

// // ES6 -> This would also not work as we want it to
// const box6 = {
//   color: 'green',
//   position: 1,
//   clickMe: () => {
//     document.querySelector('.green').addEventListener('click', () => {
//       var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//       alert(str);
//     })
//   }
// };
// box6.clickMe();

// // ES6 -> This would work as we want it to.
// const box6 = {
//   color: 'green',
//   position: 1,
//   clickMe: function () {
//     document.querySelector('.green').addEventListener('click', () => {
//       var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//       alert(str);
//     })
//   }
// };
// box6.clickMe();

// // ES5
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.myFriends5 = function (friends) {
//   var arr = friends.map(function (el) {
//     return this.name + ' is friends with ' + el;
//   }.bind(this));
//   console.log(arr);
// }
// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends5(friends);

// ES6
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.myFriends6 = function (friends) {
//   let arr = friends.map(el => `${this.name} is friends with ${el}`);
//   console.log(arr);
// }
// const friends = ['Bob', 'Jane', 'Mark'];
// new Person('Mike').myFriends6(friends);