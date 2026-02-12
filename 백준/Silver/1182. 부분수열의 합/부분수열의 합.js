
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

//무엇을 골랐느냐 -> push pop 을 통해서 해당 원소에 무엇이 들어갔는지를 기록을 하면 되지만
//단순히 그 합, 또는 총계를 나타낸다 -> 그 값만 인자로 들고가는 dfs 를 쓴다.

const [N, S] = input[0].split(" ").map(Number);
const command = input[1].split(" ").map(Number);
let count = 0;

function dfs(index, sum) {
  //인자를 두개 준 이유, 위치를 기억할 index 와 총 합을 저장하고 비교하여야 하므로 사용
  if (index === N) {
    if (sum === S) {
      count++;
    }
   return;
  }

  dfs(index+1,sum+command[index]); //선택하는 경우 -> 선택하고 넘어가므로 총계에 해당 값을 더한것을 넘겨준다
  dfs(index+1,sum); //비선택하는경우 
  //다음 인덱스로 가야함, index+1하는 경우
  //push pop을 사용하지 않은 이유? -> 어느 원소를 삽입한것이 중요한게 아니므로 dfs 재귀방식을 통해서만 해결한다.
}

dfs(0,0);
//시작엔진
if(S===0) count--;
//s가 0인 경우는 아예 공집합인 경우도 될수있으니 그 경우 -1을 해줌.
console.log(count);
