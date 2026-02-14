const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const student = input[1].split(" ").map(Number);
const stack = [];
let target = 1;

let i = 0;

while (i < N) {
  if (student[i] !== target) {
    stack.push(student[i]);
    i++;
  } else {
    target++;
    i++;
  }
  while (stack.length >= 0 && stack[stack.length - 1] === target) {
    stack.pop();
    target++;
  }
}
if (stack.length === 0) {
  console.log("Nice");
} else {
    console.log((target===N+1)?"Nice":"Sad");
}
