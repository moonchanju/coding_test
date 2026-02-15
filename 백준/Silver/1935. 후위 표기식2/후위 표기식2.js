 
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const command = input[1];
const value = input.slice(2).map(Number);

const stack = [];

function calc() {
  for (let i = 0; i < command.length; i++) {
    const ch = command[i];

    // 피연산자
    if (ch >= 'A' && ch <= 'Z') {
      const index = ch.charCodeAt(0) - 'A'.charCodeAt(0);
      stack.push(value[index]);
    }
    // 연산자
    else {
      const right = stack.pop();
      const left = stack.pop();

      let result;
      switch (ch) {
        case '*':
          result = left * right;
          break;
        case '/':
          result = left / right;
          break;
        case '+':
          result = left + right;
          break;
        case '-':
          result = left - right;
          break;
      }
      stack.push(result); 
    }
  }

  return stack.pop(); // for 끝나고 반환
}

const finalResult = calc();
console.log(finalResult.toFixed(2));
