const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const N = Number(input[0]);
const M = Number(input[1]);
const arr = [];

let result = "";

function dfs(depth)
{
  if(depth === M)
  {
    result += arr.join(" ") + "\n";
    return;
  }

  for(let i = 1; i <= N; i++)
  {
    arr.push(i);
    dfs(depth + 1);
    arr.pop();
  }
}

dfs(0);
console.log(result);