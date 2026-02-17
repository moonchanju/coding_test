const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;
const N = Number(input[idx++]);
let graph = Array.from({length:N+1},()=>[]);
//1번 정점부터 사용할 예정 graph[0]은 버림.
let visited = Array(N+1).fill(0);

//1번 정점 부터의 방문여부를 체크할 배열
for(let i= 0;i<N-1;i++)
{
  const [a,b] = input[idx++].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}
//각 정점들을 그래프에 담아줌.

const parent = [];
//부모의 정보를 담아줄 배열인데 , 원리는 1번은 46 과 연결, 반대로 46의 입장에서는 1이 부모이니 
// graph[v] 에 연결된 정점들을 탐색할때 탐색 당하는 대상의 부모가 v가 된다라는 정보로 해결
function dfs(v)
{
  for(let next of graph[v])
  {
    if(!visited[next])
    {
      visited[next]=1;
      parent[next]=v;
      dfs(next);
    }
  }
}

dfs(1);

const result =[];
for(let i=2;i<parent.length;i++)
{
  result.push(parent[i]);
}

console.log(result.join("\n"));









