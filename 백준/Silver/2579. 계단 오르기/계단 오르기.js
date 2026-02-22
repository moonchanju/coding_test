const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let idx =0;
const N = Number(input[idx++]);
const stairs = [];
for(let i=0;i<N;i++)
{
    stairs.push(Number(input[idx++]));
}
//배열 형태로 담아둠.

const dp = Array(N).fill(0);
//N 길이의 배열의 값을 각각 0으로 해두기;
dp[0]=stairs[0];
dp[1]=stairs[0]+stairs[1];
dp[2]=Math.max(stairs[0]+stairs[2],stairs[1]+stairs[2]);
for (let i = 3; i < N; i++) {
  dp[i] = Math.max(
    dp[i - 2] + stairs[i],
    dp[i - 3] + stairs[i - 1] + stairs[i]
  );
}

console.log(dp[N-1]);
