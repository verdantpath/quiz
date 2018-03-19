
var correctAnswers = 0;
// console.log(correctAnswers);

var questionOne = prompt("Who was the first President?");
if (questionOne.toUpperCase() == "GEORGE WASHINGTON" || questionOne.toUpperCase() == "GW") {
  correctAnswers += 1;
  console.log(correctAnswers);
}

var questionTwo = prompt("How many ounces in a pound?");
if (questionTwo == "16") {
  correctAnswers = correctAnswers + 1;
  console.log(correctAnswers);
}

var questionThree = prompt("How many fingers on a hand?");
if (questionThree == "5") {
  correctAnswers = correctAnswers + 1;
  console.log(correctAnswers);
}

var questionFour = prompt("What color is the sky?");
if (questionFour.toUpperCase() == "BLUE") {
  correctAnswers = correctAnswers + 1;
  console.log(correctAnswers);
}

var questionFive = prompt("What programming languate is the best?");
if (questionFive.toUpperCase() == "JAVASCRIPT" || questionFive.toUpperCase() == "JS") {
  correctAnswers = correctAnswers + 1;
  console.log(correctAnswers);
}
badge = "nothing";
if (correctAnswers >= 5) {
  badge = "Gold";
} else if (correctAnswers >= 3) {
  badge = "Silver";
} else if (correctAnswers >= 1) {
  badge = "Bronze";
}

var finalMessage = "You answered " + correctAnswers + " questions correctly. You get a " + badge + " badge.";

document.write(finalMessage);
// console.log(correctAnswers);
