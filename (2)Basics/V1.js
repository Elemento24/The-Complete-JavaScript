/***************************
  Variables and Data Types
****************************/

// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;


// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

/************************************
  Variable Mutation & Type Coercion
************************************/

// // Type Coercion
// var firstName = 'John';
// var age = 28;

// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'Teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he marrried? ' + isMarried);

// // Variable Mutation
// age = 'Twenty-Eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he marrried? ' + isMarried);

// var lastName = prompt('What is his Last Name?');
// console.log(firstName + ' ' + lastName);

/*****************
  Basic Operators
*****************/

// var year, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;

// // Math Operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn, yearMark);
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// // Logical Operators
// var johnOlder = ageJohn > ageMark;
// var markOlder = ageJohn < ageMark;
// console.log(johnOlder, markOlder);

// // typeof Operator
// console.log(typeof johnOlder);
// console.log(typeof ageMark);
// console.log(typeof 'Mark');
// var x;
// console.log(typeof x);

/*********************
  Operator Precedence
*********************/

// var now = 2020;
// var yearJohn = 1989;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

/*********************
  Coding Challenge 1
*********************/

// var massMark, massJohn, heightMark, heightJohn, bmiMark, bmiJohn;
// massMark = prompt('Enter the mass of Mark(in kgs)');
// massJohn = prompt('Enter the mass of John(in kgs)');
// heightMark = prompt('Enter the height of Mark(in m)');
// heightJohn = prompt('Enter the height of John(in m)');
// bmiMark = massMark / (heightMark ** 2);
// bmiJohn = massJohn / (heightJohn ** 2);

// var isMarkHasMoreBMI = bmiMark > bmiJohn;
// console.log(`Is Mark's BMI higher than John's? ${isMarkHasMoreBMI}`);

/*********************
  Coding Challenge 2
*********************/

// var johnScores = [1, 2, 5];
// var mikeScores = [1, 2, 5];
// var maryScores = [1, 2, 5];

// var johnAvg = johnScores.reduce((acc, next) => acc + (next / johnScores.length), 0);
// var mikeAvg = mikeScores.reduce((acc, next) => acc + (next / mikeScores.length), 0);
// var maryAvg = maryScores.reduce((acc, next) => acc + (next / maryScores.length), 0);

// switch (true) {
//   case johnAvg > mikeAvg && johnAvg > maryAvg:
//     console.log(`John's team has the highest scores, with an average score of ${johnAvg}`);
//     break;
//   case johnAvg === mikeAvg && johnAvg > maryAvg:
//     console.log(`John's and Mike's team have the highest scores, with an average score of ${johnAvg}`);
//     break;
//   case johnAvg > mikeAvg && johnAvg === maryAvg:
//     console.log(`John's and Mary's team have the highest scores, with an average score of ${johnAvg}`);
//     break;
//   case mikeAvg > johnAvg && mikeAvg > maryAvg:
//     console.log(`Mike's team has the highest scores, with an average score of ${mikeAvg}`);
//     break;
//   case mikeAvg === johnAvg && mikeAvg > maryAvg:
//     console.log(`Mike's and John's team have the highest scores, with an average score of ${mikeAvg}`);
//     break;
//   case mikeAvg > johnAvg && mikeAvg === maryAvg:
//     console.log(`Mike's and Mary's team have the highest scores, with an average score of ${mikeAvg}`);
//     break;
//   case maryAvg > johnAvg && maryAvg > mikeAvg:
//     console.log(`Mary's team has the highest scores, with an average score of ${maryAvg}`);
//     break;
//   case maryAvg === johnAvg && maryAvg > mikeAvg:
//     console.log(`Mary's and John's team have the highest scores, with an average score of ${maryAvg}`);
//     break;
//   case maryAvg > johnAvg && maryAvg === mikeAvg:
//     console.log(`Mary's and Mike's team have the highest scores, with an average score of ${maryAvg}`);
//     break;
//   default:
//     console.log(`All the 3 teams have equal scores, with an average score of ${mikeAvg}`);
// }

/*********************
  Coding Challenge 3
*********************/

// var calculateTip = function (billArr) {
//   return billArr.map(b => {
//     if (b < 50) {
//       return 0.2 * b;
//     } else if (b >= 50 && b < 200) {
//       return 0.15 * b;
//     } else {
//       return 0.1 * b;
//     }
//   });
// }

// var bills = [124, 48, 268];
// var tips = calculateTip(bills);
// var finalAmount = bills.map((b, ind) => {
//   return b + tips[ind];
// });

// console.log(tips);
// console.log(finalAmount);

/*********************
  Coding Challenge 4
*********************/

// var Mark = {
//   fullName: 'Mark Twain',
//   mass: '60',
//   height: '1.5',
//   calcBMI: function () {
//     this.BMI = this.mass / (this.height ** 2);
//     return this.BMI;
//   }
// }

// var John = {
//   fullName: 'John Smith',
//   mass: '110',
//   height: '2',
//   calcBMI: function () {
//     this.BMI = this.mass / (this.height ** 2);
//     return this.BMI;
//   }
// }

// if (Mark.calcBMI() > John.calcBMI()) {
//   console.log(`Mark has higher BMI, with the value of ${Mark.BMI}`);
// } else if (Mark.BMI < John.BMI) {
//   console.log(`John has higher BMI, with the value of ${John.BMI}`);
// } else {
//   console.log(`Both have the same BMI with a value of ${Mark.BMI}`);
// }

/*********************
  Coding Challenge 5
*********************/

var avgTip = function (tips) {
  return tips.reduce((acc, next) => {
    return acc + (next / tips.length);
  }, 0);
}

var john = {
  bills: [124, 48, 268, 180, 42],
  tips: [],
  finAm: [],
  calcTips: function () {
    var tip;
    var bill;
    for (var i = 0; i < this.bills.length; i++) {
      bill = this.bills[i];
      if (bill < 50) {
        tip = 0.2 * bill;
      } else if (bill >= 50 && bill < 200) {
        tip = 0.15 * bill;
      } else {
        tip = 0.1 * bill;
      }
      this.tips[i] = (tip);
      this.finAm[i] = (tip + bill);
    }
  }
};

var mark = {
  bills: [77, 475, 110, 45],
  tips: [],
  finAm: [],
  calcTips: function () {
    var tip;
    var bill;
    for (var i = 0; i < this.bills.length; i++) {
      bill = this.bills[i];
      if (bill < 100) {
        tip = 0.2 * bill;
      } else if (bill >= 100 && bill < 300) {
        tip = 0.1 * bill;
      } else {
        tip = 0.25 * bill;
      }
      this.tips.push(tip);
      this.finAm.push(tip + bill);
    }
  }
};

john.calcTips();
mark.calcTips();
john.avgTip = avgTip(john.tips);
mark.avgTip = avgTip(mark.tips);

if (john.avgTip > mark.avgTip) {
  console.log(`John's family paid higher tips on average, with an average value of ${john.avgTip}`);
} else if (john.avgTip < mark.avgTip) {
  console.log(`Mark's family paid higher tips on average, with an average value of ${mark.avgTip}`);
} else {
  console.log(`Both families paid equal amount of tips on average, with an average value of ${john.avgTip}`)
}