const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
let idx = 1;
const graph = [];
for (let i = 0; i < N; i++) {
  graph.push(input[idx++].split("").map(Number));
}
//2차원 배열로 각 정점들을 나눠서 담아줌.

function quad(x, y, size) {
  let color = graph[y][x];
  //색상 초기 지정해두기
  let same = true;
  for (let i = y; i < y + size; i++) {
    for (let j = x; j < x + size; j++) {
      //모든 정점을 탐색해서 -> 색상이 동일하지 않은게 나오면 재귀 탐색
      if (graph[i][j] !== color) {
        same = false;
        break;
      }
    }
    if (!same) break;
  }
  if (!same) {
    let half = size / 2;
    return `(${quad(x, y, half)}${quad(x + half, y, half)}${quad(x, y + half, half)}${quad(x + half, y + half, half)})`;
  } else {
    return String(color);
  }
}

process.stdout.write(quad(0, 0, N));
