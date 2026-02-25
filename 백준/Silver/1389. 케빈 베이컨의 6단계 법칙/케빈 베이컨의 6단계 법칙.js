const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

// 1️⃣ 인접 리스트 생성 (노드 개수 기준)
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

// 2️⃣ 한 사람 기준 BFS 해서 거리 합 구하는 함수
function bfs(start) {
  const visited = Array(N + 1).fill(false);
  const dist = Array(N + 1).fill(0); 
  const queue = [start];

  visited[start] = true;

  while (queue.length) {
    const cur = queue.shift();

    for (let next of graph[cur]) {
      if (!visited[next]) {
        visited[next] = true;
        dist[next] = dist[cur] + 1; // 최단거리 갱신
        queue.push(next);
      }
    }
  }

  // 3️⃣ 거리 합 계산
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    sum += dist[i];
  }

  return sum;
}

// 4️⃣ 모든 사람에 대해 BFS 실행
let minValue = Infinity;
let answer = 0;

for (let i = 1; i <= N; i++) {
  const result = bfs(i);

  // 최소값 갱신
  if (result < minValue) {
    minValue = result;
    answer = i;
  }
}

console.log(answer);