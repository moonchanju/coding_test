//문찬주 코드
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]); //
//Number -> 문자열을 숫자ㅗ 바꿔주는거야  -> input 이라는 문자열을 숫자로 바꿔준걸 N 에 담는다

let arr = [ ]; 
//임시 저장 결과 
let result = ""; 
// 문자열로 바꿀거야 
const used = Array(N+1).fill(false);
// true false 로 선정

function backtrack() {
    if(arr.length==N)
 
    {
        result = arr.join(" ");
        //arr 배열을 join 이라는 내장함수를 써서 문자열로 수정
        console.log(result.trim());
        
    }

        for(let i=1;i<=N;i++) //돌리겠다
    {
        if(!used[i])// used ->아직 쓰지 않은 숫자면 실행시킨다
   {
      arr.push(i); //arr q
      used[i]=true; //true 선언을 하고 
      backtrack(); 
      arr.pop();
      used[i]=false;
   }
    }
}

backtrack();  