const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;
const N = Number(input[idx++]); // 보드 크기
const apple = Number(input[idx++]); // 사과 개수

// 보드 초기화
const board = Array.from({ length: N }, () => Array.from({ length: N }, () => 0));

// 사과 위치 세팅
for (let i = 0; i < apple; i++) {
  const [A, B] = input[idx++].split(" ").map(Number);
  board[A - 1][B - 1] = 2; // 2 = 사과
}

// 뱀 방향 전환 정보
const locationNum = Number(input[idx++]);
const locationInform = [];
for (let i = 0; i < locationNum; i++) {
  locationInform.push(input[idx++].split(" "));
}

// 방향: 오른쪽(0), 아래(1), 왼쪽(2), 위(3)
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let dir = 0; // 시작 방향: 오른쪽
let count = 0; // 게임 시간
let loc = 0;   // 방향 전환 인덱스
let R = 0, C = 0; // 뱀 머리 위치

board[R][C] = 1; // 뱀 초기 위치
const snake = [[0, 0]]; // 뱀 위치 배열, 머리가 마지막

while (true) {
  count++;

  // 머리 이동
  R += dx[dir];
  C += dy[dir];

  // 충돌 체크 (벽 또는 자기 몸)
  if (R < 0 || R >= N || C < 0 || C >= N || board[R][C] === 1) break;

  // 사과 없는 자리라면 꼬리 제거
  if (board[R][C] !== 2) {
    const tail = snake.shift();
    board[tail[0]][tail[1]] = 0;
  }

  // 머리 이동 처리
  snake.push([R, C]);
  board[R][C] = 1;

  // 방향 회전 -> 이동을 한 후 방향을 마지막에 처리해줘야함.
  if (loc < locationNum && count === Number(locationInform[loc][0])) {
    if (locationInform[loc][1] === "D") dir = (dir + 1) % 4; // 오른쪽 회전
    else dir = (dir + 3) % 4; // 왼쪽 회전
    loc++;
  }
}

console.log(count);