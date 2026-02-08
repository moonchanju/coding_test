const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const sentence = input[0];
let num = ""; 
//빈 문자열
let result = [];
for (let ch of sentence) {
    //현재기준 ["50-50+15-40+40"]
  if (ch === "-") //뺄셈을 기준으로 문자열 일단 분리
  {
    result.push(num);
    num="";
  } else {
    num += ch;
  }
}
result.push(num); // 미처리된 문장 하나를 더 처리해준다

//현재 기준 ["50","50+15+40","40"]

const newresult =result.map(v=>{
    const part = v.split("+");
    let sum =0;
    for(let i=0;i<part.length;i++)
    {
        sum+=Number(part[i]);
    }

    return sum;
})
//map 자체는 배열을 순회하면서 새로운 배열을 리턴하는 용도로 쓰임/



let sum = newresult[0];
for(let i=1;i<newresult.length;i++)
{
    sum-=newresult[i];
}

console.log(sum);


