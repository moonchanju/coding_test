const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
let idx = 1;

for (let i = 0; i < N; i++) {
  const number = Number(input[idx++]);
  

  let result = [];
  for (let j = 2; j <= number; j++) {
    let isprime = true;
    for (let k = 2; k * k <= j; k++) {
      if (j % k === 0) {
        isprime = false;
        break;
      }
    }
    if (isprime) result.push(j);
  }


  let left = 0;
  let right = result.length - 1;
  let final = Infinity;
  let answer = [];

  while (left <= right) {
    const sum = result[left] + result[right];
    if (sum === number) {
      const diff = Math.abs(result[right] - result[left]);
      if (diff < final) {
        final = diff;
        answer = [result[left], result[right]];
      }
      left++;
      right--; // 최소 차이 가능하므로 둘 다 이동
    } else if (sum < number) {
      left++;
    } else {
      right--;
    }
  }

  console.log(answer.join(" "));
}