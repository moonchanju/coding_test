const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;
const N = Number(input[idx++]);
const dist = input[idx++].split(" ").map(BigInt);
const cost = input[idx++].split(" ").map(BigInt);

let sum = 0n;
let minCost = cost[0];

for (let i = 0; i < N - 1; i++) {
  if (cost[i] < minCost) {
    minCost = cost[i];
  }

  sum += minCost * dist[i];
}

console.log(sum.toString());