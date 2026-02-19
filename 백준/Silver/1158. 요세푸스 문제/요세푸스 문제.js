const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N,M] = input[0].split(" ").map(Number);
const graph =[];
const result=[];
for(let i=1;i<=N;i++)
{
    graph.push(i);
}
//[1,2,3,4,5,6,7]
//2명이하, 반대로 해서 출력하는 코드가 필요함
while(graph.length>0)
    //길이가 2부터는 실행하지 않음
{
    for(let i=0;i<M-1;i++)
    {
        //console.log(M);
        const t = graph.shift();
        graph.push(t);
       // console.log(graph);
    }
    const c = graph.shift();
    result.push(c);
}

console.log(`<${result.join(", ")}>`);


