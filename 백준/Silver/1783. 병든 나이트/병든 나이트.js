//병든 나이트 (그리디 알고리즘이라고 해서 뽑았긴한데 
//막상 풀다보니 그리디 알고리즘이 아니라고 함)
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const N = Number(input[0]); // 세로 길이
const M = Number(input[1]); // 가로 길이

function maxVisited(N, M) {
    // 1. 세로가 1이면 이동 불가
    if (N === 1) return 1;

    // 2. 세로가 2이면 위/아래 이동 제한 → 최대 4칸
    if (N === 2) return Math.min(4, Math.floor((M + 1) / 2));

    // 3. 세로 3 이상, 가로가 7 미만 → 네 방향 이동 모두 사용 불가
    if (M < 7) return Math.min(4, M);

    // 4. 세로 3 이상, 가로 7 이상 → 네 방향 이동 모두 사용 가능
    return M - 2;
}

console.log(maxVisited(N, M));