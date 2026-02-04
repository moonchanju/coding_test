// 문찬주 코드
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
// 한 줄 입력을 공백으로 나눔

const N = Number(input[0]); 
const M = Number(input[1]); 
// Number -> 문자열을 숫자로 바꿔서 각각 N, M에 담음

const arr = []; 
// 순열을 임시로 저장할 배열
const used = Array(N + 1).fill(false); 
// 숫자 사용 여부를 true/false로 체크

function backtrack() {
  if (arr.length === M) {
    // 수열 길이가 M이면 출력
    console.log(arr.join(' ')); 
    // 배열을 공백으로 join해서 출력
    return; 
    // 재귀 종료
  }

  for (let i = 1; i <= N; i++) {
    // 1부터 N까지 반복
    if (!used[i]) {
      // 아직 사용하지 않은 숫자면
      arr.push(i); 
      // 배열에 추가
      used[i] = true; 
      // 사용 표시
      backtrack(); 
      // 재귀 호출
      arr.pop(); 
      // 마지막 원소 제거
      used[i] = false; 
      // 사용 표시 초기화
    }
  }
}

backtrack(); 
// 백트래킹 함수 실행