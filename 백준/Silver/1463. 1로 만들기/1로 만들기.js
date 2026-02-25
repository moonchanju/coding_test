const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let dp = Array(N+1).fill(0);
dp[1]=0;
dp[2]=1;
for (let i = 3; i <=N; i++) {
  dp[i] =
    Math.min(
      dp[i - 1],
      i % 2 === 0 ? dp[i / 2] : Infinity,
      //infinity -> 무한인 수를 가리킴, 이 코드에서는 2로 나누어지는 수중 소수인 수를 그냥 
      //무한으로 튕겨내었음.
      i % 3 === 0 ? dp[i / 3] : Infinity,
    ) + 1;
}

console.log(dp[N]);

