// ============
// Hoisting
// ============

// Hoisting for functions only works with function declarations, i.e. it would give the result
// calculateAge(1990);
// function calculateAge(year) {
//   console.log(2020 - year);
// }

// Hoisting for functions doesn't work in case of Function Expressions, i.e. it would give an error.
// calcRetire(1990);
// var calcRetire = function (year) {
//   console.log(65 - (2020 - year));
// }

// For variables, hoisting looks for variable declarations in the code, and then initialise them as undefined.
// console.log(age); // Undefined
// var age = 23;
// console.log(age); // 23

// function foo() {
//   console.log(age); // Undefined
//   var age = 65;
//   console.log(age); // 65
// }
// foo(); // 65
// console.log(age); //23


// ============
// Scoping
// ============

// First scoping example
// var a = 'Hello!';
// first();
// function first() {
//   var b = 'Hi!';
//   second();
//   function second() {
//     var c = 'Hey!';
//     console.log(a + b + c);
//   }
// };

// Example to show the differece between execution stack and scope chain
// var a = 'Hello!';
// first();
// function first() {
//   var b = 'Hi!';
//   second();
//   function second() {
//     var c = 'Hey!';
//     third()
//   }
// }
// function third() {
//   var d = 'John';
//   console.log(a + b + c + d); // It will give an Error.
// }

// ===============
// This Variable
// ===============

// console.log(this);

// As we know, that in a Regular function call, the 'this' keyword always refer to the Window Object.
// calculateAge(1985);
// function calculateAge(year) {
//   console.log(2020 - year);
//   console.log(this);
// }

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function () {
    // The below this keyword, will refer to the John object, according to the rules, as it is defined inside a method on an object, 
    console.log(this);
    console.log(2020 - this.yearOfBirth);

    // In this case, however, the this keyword is inside a normal function. Though the function is inside a method on an object, still it is inside the normal function, for which the rules say, that the default object is the Window object only, and so the output.
    // function innerFunction() {
    //   console.log(this);
    // }
    // innerFunction();
  }
}
john.calculateAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1984
};

// Here we have copied the method from the john object to the mike object. Now, we can infer that the value of this keyword is assigned only at the time of execution. Had it been otherwise, then the value of this keyword, inside the method, would always have been john.
mike.calculateAge = john.calculateAge;
mike.calculateAge();

