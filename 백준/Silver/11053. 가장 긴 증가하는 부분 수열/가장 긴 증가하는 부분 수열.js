const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
const commands = input[1].split(" ").map(Number);

//다이나믹 프로그래밍에서 전형적으로 나오는 문제유형
//가장 긴 감소,증가하는 부분 순열을 구할때 사용하는 로직으로
//순서 유지(새롭게 정렬할 필요없이)+ 최대 길이 계산의 방식으로 문제를 풀어나가면 된다.

const dp = new Array(T).fill(1);
//처음에 모든 원소들의 부분순열 길이를 1로 채워두고 시작함
//[1,1,1,1,1,1]의 형식

for (let i = 1; i < T; i++) {
  for (let j = 0; j < i; j++) {
    if (commands[j] < commands[i]) {
      //i가 현재 보는 원소, j가 이전 원소들을 대상으로 하는건데 , i가
      dp[i] = Math.max(dp[i], dp[j] + 1);
      // i번째 원소를 끝으로 하는 LIS 길이를 계산
      // i보다 앞에 있는 모든 j를 확인
      // 만약 j번째 원소를 끝으로 하는 LIS(dp[j])에 i를 추가하면 길이가 더 길어지는 경우
      // 현재 dp[i]보다 길다면 dp[i]를 갱신
      // 즉, "i를 끝으로 하는 LIS 길이는, 이전 모든 가능한 LIS 길이 + 1 중 최대값"
    }
  }
}

console.log(Math.max(...dp));