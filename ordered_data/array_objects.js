/** @format */

const students = [
  { name: "John", age: 66 },
  { name: "Doee", age: 21 },
  { name: "Andres", age: 43 },
  { name: "Pablo", age: 66 },
  { name: "Pablo", age: 33 },
];

// Sort the array of students base on the age
students.sort((a, b) => a.age - b.age);
console.log(students);

// Reverse the order of the array
console.log(students.reverse());

//  Find a studen in the array who has a grade over 90
const overNiney = students.find((student) => student.age > 40);
console.log(overNiney);
// const canales = {
//   0: { name: "John", age: 15 },
//   1: { name: "Doee", age: 21 },
//   2: { name: "Andres", age: 34 },
// };
