const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
const graph =[];
for(let i=0;i<T;i++)
{
    graph.push(Number(input[i+1]));
}
graph.sort((a,b)=>a-b);
//오름 차순 정렬
let final = [];
let count = 1;

for(let i=T-1;i>=0;i--)
{
    let temp = graph[i]*count;
    final.push(temp);
    count++;
}

final.sort((a,b)=>a-b);
console.log(final[final.length-1]);