const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
let A = input[1].split(" ").map(Number);
const M = Number(input[2]);
let B = input[3].split(" ").map(Number);

function gcd(a, b) {
  while (b !== 0) {
    let temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

let result = 1;
let overflow = false;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    let g = gcd(A[i], B[j]);
    if (g > 1) {
      result *= g;
      A[i] /= g;
      B[j] /= g;

      if (result >= 1e9) {
        overflow = true;
        result %= 1e9;
      }
    }
  }
}

if (overflow) {
  console.log(String(result).padStart(9, "0"));
} else {
  console.log(result);
}