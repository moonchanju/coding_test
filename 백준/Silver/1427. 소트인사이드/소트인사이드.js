const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = input.split("").map(Number);
const arr = [];
const invert = [];
for(let i=0;i<N.length;i++)
{
  arr.push(N[i]);
}

for(let i=1;i<arr.length;i++)
{
  const key = arr[i];
  let j=i-1;
  while(j>=0&&arr[j]>key)
  {
    arr[j+1]=arr[j];
    j--;
  }
  arr[j+1]=key;
}

for(let i=arr.length-1;i>=0;i--)
{
  invert.push(arr[i]);
}

console.log(invert.join(""));
