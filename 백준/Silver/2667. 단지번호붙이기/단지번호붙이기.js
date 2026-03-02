const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;
const N = Number(input[idx++]);
const map = [];
for (let i = 0; i < N; i++) {
  map.push(input[idx++].split("").map(Number));
}
//배열 속 배열들의 모임으로 이루어짐.
//console.log(map);
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let count =1;
function dfs(a, b) {
  map[a][b] = 0;
  for (let i = 0; i < 4; i++) {
    const nx = a + dx[i];
    const ny = b + dy[i];
    if(nx<0||ny<0||nx>N-1||ny>N-1) continue; //배열 범위 터지지않게 조정
    //범위 내에서 탐색
    if (map[nx][ny] === 1) {
      count++;
      dfs(nx, ny);
    }
  }
}

let totalCount = 0;
const result =[];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1) {
     // console.log("hi");
      dfs(i, j);
      result.push(count);
      totalCount++;
      count =1;
    }
  }
}

result.sort((a,b)=>a-b);

console.log(totalCount);
console.log(result.join("\n"));
