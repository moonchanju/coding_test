const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;
let N = Number(input[idx++]);

const glass = [];
for (let i = 0; i < N; i++) {
  glass.push(Number(input[idx++]));
}

if (N < 3) {
  if (N === 1) {
    console.log(glass[0]);
  } else if (N === 2) {
    console.log(glass[0] + glass[1]);
  }
  //배열 크기가 점화식에 충분하지 않을경우에 대비한 예외처리
} else {
  const dp = Array.from({ length: N }, () => 0);
  dp[0] = glass[0];
  dp[1] = glass[0] + glass[1];
  dp[2] = Math.max(
    glass[0] + glass[1],
    glass[0] + glass[2],
    glass[1] + glass[2],
  );
  //dp 초기세팅

  for (let i = 3; i < N; i++) {
    dp[i] = Math.max(
      dp[i-1],  // 아직 이해 미흡..
      //안 마시는 경우 
      // 그 선택 자체를 후보에서 지워버리는 방식 
      //계단은 마지막 계단을 필수적으로 밟아야 해서 dp[i-1]이 필요없음
      //잔은 마지막 잔을 필수적으로 마시지 않아도 됨 -> 선택하지 않는 경우도 고려해야함
      //마지막을 필수적으로 방문한다 -> 마지막을 밟은 후 최대가 된다,
      //반대로 마지막을 방문하지 않아도 된다 -> 마지막을 밟지 않은 상태에서 최대를 찾는다.
      dp[i - 3] + glass[i - 1] + glass[i],
      dp[i - 2] + glass[i],
    );
    //점화식
  }
  console.log(dp[N - 1]);
}
