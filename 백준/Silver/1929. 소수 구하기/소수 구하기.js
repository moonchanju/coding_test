//문찬주 코드
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

let result = "";

for (let i = a; i <= b; i++) {
  if (isPrime(i)) {
    result += i + "\n";
  }
}

console.log(result.trim());