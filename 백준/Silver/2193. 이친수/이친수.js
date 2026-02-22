const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;

const N = Number(input[idx++]);

const dp = Array.from({ length: N }, () => Array(2).fill(0n));
if (N === 1) {
  console.log(1n.toString());
} else {
  dp[0][1] = 1n;
  dp[1][0] = 1n;
  for (let i = 2; i < N; i++) {
    dp[i][0] = dp[i - 1][1] + dp[i - 1][0];
    dp[i][1] = dp[i - 1][0];
  }
  console.log((dp[N - 1][0] + dp[N - 1][1]).toString());
}
