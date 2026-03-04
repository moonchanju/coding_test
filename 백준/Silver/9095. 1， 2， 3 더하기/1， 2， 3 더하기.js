const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const T = Number(input[0]);

// n은 최대 10이므로 10까지만 미리 계산
const dp = Array(11).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= 10; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

let result = "";

for (let i = 1; i <= T; i++) {
  const n = Number(input[i]);
  result += dp[n] + "\n";
}

console.log(result.trim());