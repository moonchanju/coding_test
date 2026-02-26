const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let [a, b] = input[i].split(" ").map(Number);

  let base = a % 10;

  if (base === 0) {
    console.log(10);
    continue;
  }

  // 주기 계산
  let result = 1;
  let cycle = b % 4 === 0 ? 4 : b % 4;

  for (let j = 0; j < cycle; j++) {
    result = (result * base) % 10;
  }

  console.log(result === 0 ? 10 : result);
}