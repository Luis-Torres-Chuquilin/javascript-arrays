/** @format */

const countries = ["Peru", "Chile", "Australia"];

//
console.log("Tradidional for loop");
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}

// forEach Method
console.log("With forEach() method");

countries.forEach((element) => console.log(element));

// 2scond example

const scores = [88, 94, 23, 44, 56];

const logScore = (score) => {
  if (score > 65) {
    console.log("Score Over 65", score);
  }
};

scores.forEach((element) => {
  if (element > 65) {
    logScore(element);
  }
});

// The next use of forEach does not work
scores.forEach(logScore(element));
