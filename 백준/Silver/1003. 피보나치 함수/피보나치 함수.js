const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
const commands = input.slice(1).map(Number);

//다이나믹 프로그ㅐ밍 -> 큰문제를 작은 문제로 나누고, 작은 문제의 답을 저장해두었다가 -> 나중에 재사용하는 방식
//일방적인 재귀는 시간이 오래 걸린다, 불필요한 계산이 반복되니

//그래서 취하는 방식이 -> 가장 작은 값부터 계산하고 저장한다

//const arr = Array(41).fill([0,0]) -> 얼핏보면 41개 배열에 00 채워서 맞는 것 처럼 보이나 모든 칸이
//참조를 공유하기에 값이 다 같아져버린다 -> .fill, .from의 차이 여기서 존재
//.fill 배열의 모든 요소를 같은 값으로 채움
//.from 배열을 새로 만들며 각 요소를 독립적으로 초기화 가능함.
//Array.from(배열로 만들 대상/길이가 있는 객체,각 요소들을 변형 시 사용하는 함수)

const fibonacci  = Array.from({length: 41},()=>[0,0]); 
fibonacci[0] = [1,0]; //0횟수 1, 1횟수 0 
fibonacci[1] = [0,1]; //0횟수 0 , 1횟수 1
//아이디어 : 0이 나오는 횟수와 1이나오는 횟수를 담은 2차원 배열의 가장 작은 값을 계산하고 저장하며
//재사용하는 방식으로 몸집을 키워나가자.

for(let i=2;i<fibonacci.length;i++)
{
  //fibonacci 2 부터의 처리 방식임 , 되게 독특한 구조 -> 각각의 0 횟수와 1횟수에 직접적으로 간섭해 만듦. 
  fibonacci[i][0]=fibonacci[i-1][0]+fibonacci[i-2][0];
  fibonacci[i][1]=fibonacci[i-1][1]+fibonacci[i-2][1];
}

for(let x of commands)
{ 
 console.log(fibonacci[x][0],fibonacci[x][1]);
}