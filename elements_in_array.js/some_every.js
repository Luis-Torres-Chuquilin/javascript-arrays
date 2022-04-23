/** @format */

const temps = [90, 85, 84, 77, 54];
const some = temps.some((element) => element < 90); // true
const every = temps.every((element) => element < 90); // false

console.log(some, every);

const states = ["California", "New Yorl", "New Jersey", "New Mexico"];

const someStates = states.some((state) => state.startsWith("New"));
console.log(someStates);

const everyStates = states.every((state) => state.startsWith("New"));
console.log(everyStates);
