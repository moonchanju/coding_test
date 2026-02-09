const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const recommend = input[2].split(" ").map(Number);

const frames = [];

for (let student of recommend) {
  let found = false;
  for (let x of frames) {
    if (x.student === student) // 학생번호가 이미 존재한다면
    {
      found = true;
      x.count++; //추천횟수를 증가한다.
      break;
    }
  }

  if (found) continue; //추천한 학생 다시 집어넣기 방지

  if (frames.length === N) {
    let minCount = Infinity;
    for (let i = 0; i < frames.length; i++) {
      minCount = Math.min(minCount, frames[i].count);
    }
    for (let i = 0; i < frames.length; i++) {
      if (frames[i].count === minCount) {
        frames[i].count = 0; //삭제 전 추천수를 초기화 시켜주고
        frames.splice(i, 1); //틀에서 해당 학생의 객체를 제거
        break;
      }
    }
  }
  frames.push({ student, count: 1 });
}

console.log(frames.map((f) => f.student).sort((a, b) => a - b).join(" "));