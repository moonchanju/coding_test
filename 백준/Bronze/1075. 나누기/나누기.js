const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let N = Number(input[0]);
let F = Number(input[1]);

// 뒤 두 자리 제거 → 00으로 만들기
let base = Math.floor(N / 100) * 100;

// 00 ~ 99까지 확인
for (let i = 0; i < 100; i++) {
  if ((base + i) % F === 0) {
    console.log(String(i).padStart(2, "0"));
    break;
  }
}