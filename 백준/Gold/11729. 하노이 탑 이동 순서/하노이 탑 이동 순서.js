const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const N = Number(input);

let result = "";
let count = 0;

function hanoi(n, from, via, to) {
  if (n === 1) {
    result += `${from} ${to}\n`;
    count++;
    return;
  }

  hanoi(n - 1, from, to, via);
  result += `${from} ${to}\n`;
  count++;
  hanoi(n - 1, via, from, to);
}

hanoi(N, 1, 2, 3);

console.log(count);
console.log(result);