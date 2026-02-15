const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

//큐 크기 N 뽑으려는 수 개수 M (M<=N 인 자연수)
//수의 위치 인덱스

const [N,M] = input[0].split(" ").map(Number);
let commands= input[1].split(" ").map(Number);
const arr=[];
//N에 해당하는 값을 저장하려는 배열
let count =0;
for(let i=1;i<=N;i++)
{
  arr.push(i);
  //그 값을 집어넣어.
}

function calc(val)//val은 배열
//배열을 매개변수로 줘서 while 문을 통해서 M의 모든 원소를 다 뽑아낼때까지 진행한다.
{
  while(commands.length!=0)
  {
    let target = commands[0]; //command 배열안에 들어가는 첫번째 원소가 항상 출력해야하는 대상 (계속 뽑히면서 하나씩 줄어들기에, 앞에서 부터 하나씩 slice 로 줄여나감)
let idx = val.indexOf(target); //해당 commands 의 값을 가진것이 arr 배열안에서 몇번째 인덱스에 위치해있는지 값을 idx에 저장
    //1이 command[i] 안에 있으면 그 배열 제외한 새로운 배열 만들기
    let divider = (val.length-1)/2; 
    //배열 길이의 절반이 즉 판단 지점 -> 찾고자 하는 값이 절반지점보다 작으면 2번 계산과정 반복, 크면 3번 계산과정 반복
    if(idx<=divider){ 
      //작으면 의 경우
      while(target!=val[0])
        //찾고자하는 값이 arr배열의 값이랑 같을때 까지
      {
       const t = val[0]; 
       val = val.slice(1);
       val.push(t);
       count++;
       //왼쪽으로 이동하는 과정 반복, 해당 과정에서 count를 1씩 증가
      }
      val = val.slice(1);
      commands=commands.slice(1);
      //해당 과정을 다 거치면 자연스레 첫번째 인덱스로 오게되어 원 배열에서도 없애주고 찾고자 하는 배열에서도 없애준다.
    }
    else{
      while(target!=val[0])
      {
        //젤 우측을 때서 제일 앞에 붙이기
        const t = val.pop();
        val = [t, ...val];
        //t를 앞에 넣어주고 뒤에는 배열 복사
        count++;
      }
      val = val.slice(1);
      commands=commands.slice(1);
    }
  }
}

calc(arr);
console.log(count);