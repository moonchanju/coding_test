const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;
const dx = [0, 1, 1, 1, 0, -1, -1, -1];
const dy = [1, 1, 0, -1, -1, -1, 0, 1];

while (true) {

  let count = 0;
  const [N, M] = input[idx++].split(" ").map(Number);

  if ((N === 0) & (M === 0)) break;
  const graph = []; // const로 선언하여 반복문이 끝나기전 까지의 범위까지를 처리한다.
  for (
    let i = 0;
    i < M;
    i++ //세로줄의 개수만큼 반복해서 입력을 받음
  ) {
    graph.push(input[idx++].split(" ").map(Number));
    //2차원 배열의 형식으로 저장 [[0,1][1,0]] 의 느낌으로
  }


  function dfs(a, b) {
    graph[a][b] = 0;
   
    for (let i = 0; i < 8; i++) {
      const x = a + dx[i];
      const y = b + dy[i];
      if (x < 0 || x > M - 1 || y < 0 || y > N - 1) continue;
      if (graph[x][y] === 0) {
        continue;
      }
      dfs(x, y);
    }
  }
//n 이 열 m 이 행
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] === 1) {
        dfs(i, j);
        count++;
        //dfs 한번당 섬의 개수 하나가 되기에
      }
    }
  }
  console.log(count);
}
