// Use this file to write the logic of your game, the needed attrs and functions

var TenSecondsMathGame = function(operation, upperLimit) {



};

// Returns a random integer between [1..numberLimit]
function randomInteger(upperLimit){
  // suma de 1 al final para que no nos devuelva 0
  return (Math.floor(upperLimit * Math.random(), 0)) + 1;
}

// Select concrete operation
function selectOperation(operationsArray) {
  return operationsArray[Math.floor(Math.random() * operationsArray.length)];
}

// Returns an object with {question, answer}
function randomQuestion(operationsArray, upperLimit) {
  var a = randomInteger(upperLimit);
  var b = randomInteger(upperLimit);
  /*TODO var difference = Math.abs(a - b);
  if (difference < 3) {
  }*/

  switch (selectOperation(operationsArray)) {
    case "sum":
      return {
        num1: a,
        num2: b,
        question: a + " + " + b, //10 + 40
        answer: a + b
      };
    case "substraction":
      if (b > a) {
        return {
          num1: b,
          num2: a,
          question: b + " - " + a,
          answer: b - a
        };
      }
      return {
        num1: a,
        num2: b,
        question: a + " - " + b,
        answer: a - b
      };
    case "multiplication":
      return {
        num1: a,
        num2: b,
        question: a + " * " + b,
        answer: a * b
      };
    case "division":
      return {
        num1: a,
        num2: b,
        question: a + " / " + b,
        // 2 corresponde al número de decimales
        answer: (a / b).toFixed(2)
      };
  }
}
// myOperationsArray =[ 'substraction'];
//   var myQuestion = randomQuestion(myOperationsArray, 30);
//   var myInput = prompt("Escribe tu respuesta:" + myQuestion.question);
//   console.log(checkAnswer(myInput, myQuestion));
  //Checks a user answer
function checkAnswer(userInput, operationQuestion){
  return parseInt(userInput) === operationQuestion.answer;
}
