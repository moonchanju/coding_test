const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;
const [N, M] = input[idx++].split(" ").map(Number);
//헛간 개수, 양방향 개수
const graph = Array.from({ length: N + 1 }, () => []);
//내부 요소 각각을 배열로 잡는다.
const visited = Array.from({ length: N + 1 }, () => false);
//방문여부 확인 배열

for (let i = 0; i < M; i++) {
  const [a, b] = input[idx++].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

let queue = [];
let dist = Array(N+1).fill(-1);
function bfs(v) {
  //거리를 매개변수로 주어 상태가 지나가면 사라지게 하면 -> 거리로 관리하기가 버겁다.
  visited[v] = true;
  queue.push(v);
  let head =0;
  dist[v]=0;
  while (head < queue.length) {
    const node = queue[head++]; 
    //큐에 그냥 넣어두고, 탐색 범위만 그 다음 범위로 보는 형식 -> 기존 방식은 배열을 매번 만들기에 비효율적
    for (let next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
        dist[next]=dist[node]+1; //node 에 연결된 모든 next들의 깊이를 1씩 증가시켜 저장.
        //깊이를 매개변수로 주는것 보다 배열로 만들어 관리하는게 훨씬 효율적
      }
    }
  }
}

bfs(1, 0);
//console.log(dist);

const best = Math.max(...dist); //가장 멀리있는 헛간의 길이


let count =0;
let first =0;
for(let i=0;i<dist.length;i++)
{
  if(dist[i]===best)
    //헛간마다의 길이중에 가장 긴게 걸리면
  {
    if(first===0) first= i;
    count++;
  }
}

console.log(`${first} ${best} ${count}`)
