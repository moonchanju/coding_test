const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const commands = input.slice(1);

let arr = [];
let front = 0;

function calc() {
  for (let i = 0; i < N; i++) {
    const [order, val] = commands[i].split(" ");

    switch (order) {
      case "push":
        arr.push(Number(val));
        break;

      case "pop":
        if (front < arr.length) {
          console.log(arr[front++]);
        } else {
          console.log(-1);
        }
        break;

      case "size":
        console.log(arr.length - front);
        break;

      case "empty":
        console.log(front === arr.length ? 1 : 0);
        break;

      case "front":
        console.log(front < arr.length ? arr[front] : -1);
        break;

      case "back":
        console.log(front < arr.length ? arr[arr.length - 1] : -1);
        break;
    }
  }
}

calc();