const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const command = [];
for (let i = 1; i <= N; i++) {
  command.push(input[i].split(" ").map(Number));
}

let answer = Infinity;
function dfs(start, sour, bitter,used) {
  if (start === N) {
    if (used) {
      answer = Math.min(answer, Math.abs(sour - bitter));
    }
    return;
  }
  dfs(start + 1, sour * command[start][0], bitter + command[start][1], true);
  dfs(start + 1, sour, bitter,used);
}

dfs(0, 1, 0, false);
//전부 미 선택인 경우는 계산하면 안됨.
console.log(answer);
