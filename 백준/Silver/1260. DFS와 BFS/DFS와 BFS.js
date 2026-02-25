const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, V] = input[0].split(" ").map(Number);
// 4 5 1
const Num = input.slice(1);
//1 2 , 1 3 , 1 4, 2 4 , 3 4 를 받는 용도 -> 나중에 한번더 나누어서 저장해줘야함.

const graph = Array.from({ length: N + 1 }, () => []);
//1번부터 N번까지의 정점을 만들어줌, graph[0]은 버리는 용도.
const visited = Array(N + 1).fill(false);
//1번부터 N번까지의 정점의 방문 여부를 체크할 배열, Visited 로 만들어주면 된다.
const result = [];
const queue = [];
const bfsresult = [];
for (let i = 0; i<M ; i++) {
  const [a, b] = Num[i].split(" ").map(Number);
  //1,2 1,3 1,4 2,4 .. 이런 용도.
  //1->2 2->1 로 넣는 것이 양방향 그래프이다.
  graph[a].push(b);
  graph[b].push(a);
  //양방향으로 넣어서 양방향 그래프를 만듦, 동시에 이 과정에서 인접리스트로 표현이 되는것.
}

for (let i = 1; i <=N; i++) {
  graph[i].sort((a, b) => {
    return a - b;
  });
  //sort(정렬기준함수)-> a-b 라고 하면 음수가 되면 a가 작음 0 이면 같음, 양수이면 a가 큼 (b가 작음)
  //인접리스트의 거리순별로 정렬이 된다.
}

function dfs(v) {
  visited[v] = true;
  result.push(v);
  for (let next of graph[v]) {
    if (!visited[next]) {
      dfs(next);
    }
  }
}

function bfs(v) {
  queue.push(v);
  visited[v] = true;
  while(queue.length>0)
  {
    const first = queue.shift(); //첫번째 원소를 반환하고 , 그 원소를 배열에서 제거시켜준다. 
    //큐를 흉내낼떄 사용하는 것이며, 이걸 쓰지 않으면 효율이 안나서 앞으로 씀.
    bfsresult.push(first);

    for(let next of graph[first])
    {
      if(!visited[next])
      {
        visited[next]= true;
        queue.push(next);
      }
    }
  }
}


dfs(V);
visited.fill(false);
bfs(V);
console.log(result.join(" "));
console.log(bfsresult.join(" "));
