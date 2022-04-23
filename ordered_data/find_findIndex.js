/** @format */

const values = [6545, 21, 23, 434, 5642, 4, 23];

// Returns the first element that pass the test function
const underEighty = values.find((element) => element < 80);
console.log(underEighty);

// Find the index of the first grade  that is over 80
const indexOverEighty = values.findIndex((element) => element > 80);
console.log(indexOverEighty);
