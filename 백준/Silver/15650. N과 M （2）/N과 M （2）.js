const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const N = Number(input[0]);
const M = Number(input[1]);
const arr = [];



function dfs(depth,start) {
  if (arr.length === M) {
    console.log(arr.join(" "));
    return;
    //출력하고 다시 가기
  }

  for (let i = start; i <= N; i++) {
    //12 13 14 21
   {
      arr.push(i);
      
      dfs(depth + 1,i+1);

      arr.pop();
    
    }
  }
}
//기존에는 visited 배열이 중복 검사를 해주는 느낌 -> 11 22 같은걸 피하기 위해서 불린 값을 사용하여 체크를 했지만
//오름차순으로 구성되어야 하는 경우 어짜피 매 for문마다 다르게 해주면 되니까 dfs에 매개변수 조건을 추가해서 만들어줌.
dfs(0,1);
