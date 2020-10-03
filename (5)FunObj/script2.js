// =================
// CODING CHALLENGE
// =================

(function () {
  // Function Constructor
  var Question = function (ques, arrAns, indCorAns) {
    this.question = ques;
    this.arrAns = arrAns;
    this.indCorAns = indCorAns;
  };

  // Method on the Prototype of the Constructor Function, to display the function
  Question.prototype.present = function () {
    console.log(this.question);
    this.arrAns.map((ans, ind) => {
      console.log(`${ind}-> ${ans}`);
    });
  };

  // Method on the Prototype of the Constructor Function, to check the Answer
  Question.prototype.checkAns = function (corAns, callback) {
    var sc;
    if (this.indCorAns === corAns) {
      console.log("Correct Answer!");
      sc = callback(true);
    } else {
      console.log("Incorrect Answer!");
      sc = callback(false);
    }
    this.displayScore(sc);
    return sc;
  };

  Question.prototype.displayScore = function (score) {
    console.log(`CURRENT SCORE -> ${score} `);
    console.log();
  }

  var questions, ran, corAns, totalScore;
  totalScore = 0;
  corAns = 'START';
  questions = [];

  questions[0] = new Question("What is the name of the Course's Instructor?", ['John', 'Michael', 'Jonas'], 2);
  questions[1] = new Question("Is JavaScript the coolest programming language in the World?", ['Yes', 'No'], 0);
  questions[2] = new Question("How can you describe coding in the best manner?", ['Tedious', 'Fun', 'Boring'], 1);

  // We have used the Closures to keep the track of the Total Score.
  function score() {
    var sc = 0;
    return function (isCorrect) {
      if (isCorrect)
        sc++;
      return sc;
    }
  };
  var keepScore = score();

  function nextQuestion() {
    ran = Math.floor(Math.random() * questions.length);
    questions[ran].present();
    corAns = prompt("Please select the correct answer (Just type the number).");

    if (corAns.toLowerCase() !== 'exit') {
      totalScore = questions[ran].checkAns(Number(corAns), keepScore);
      nextQuestion();
    }
  };

  nextQuestion();
  console.log();
  console.log(`TOTAL SCORE -> ${totalScore} `);
})();

