/** @format */

const bowlingScore = [154, 205, 300, 184, 277];

// Does the array innclude a 300?
const includesScore = bowlingScore.includes(300);
console.log(includesScore);

// Are of the scorer under 150
const someScores = bowlingScore.some((score) => score < 150);
console.log("Under 150", someScores);

// Its every score and even number?
const everyScore = bowlingScore.every((element) => element % 2 === 0);
console.log(everyScore);
