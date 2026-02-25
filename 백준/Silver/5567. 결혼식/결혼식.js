const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let idx = 0;
const n = Number(input[idx++]);
const m = Number(input[idx++]);
const graph = Array.from({ length: n + 1 }, () => []);
//인접리스트를 위한 graph 생성
const visited = Array.from({ length: n }, () => false);
//console.log(visited);
for (let i = 0; i < m; i++) {
  const [N, M] = input[idx++].split(" ").map(Number);
  graph[N].push(M);
  graph[M].push(N);
  //인접리스트 작성 (1번부터 m번까지)
}
//console.log(graph);

let count = 0;
const queue = [];
//두가지 인자를 관리(깊이가 1이상 2이하일때만 카운트를 재야함)
function bfs() {
  //깊이가 계속 깊어지는 구조 (그래서 깊이 2 이하인 부분만 출력에 포함)
  //graph
  visited[1] = true;
  queue.push([1,0]);
  //현재 노드 번호 및 depth 큐에 삽입
  while (queue.length > 0) {
    const [cur,depth] = queue.shift();
    if(depth>0&&depth<=2)
    {
      count++; 
    }
    for (let ch of graph[cur]) {
      //만약 입력에서 1을 주지 않아도, 알아서 1과 연결된 것이 없게 되므로 
      //0이 출력이 됨.
      if (!visited[ch]) {
        visited[ch]=true;
        queue.push([ch,depth+1]);
      }
    }
  }
}


bfs();
console.log(count);

