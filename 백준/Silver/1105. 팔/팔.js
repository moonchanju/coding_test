const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [L, R] = input[0].split(" ");
//문자 형태로만 두기
const left = L.split("").map(Number);
const right = R.split("").map(Number);
let idx = 0;
let count = 0;
if (L.length != R.length) //문자열 길이로 비교
{
  console.log(0);
} else {
  if (Number(L) > Number(R)) {
    console.log(0);
  } else {
    while (idx < left.length) {
      if (left[idx] === 8 && right[idx] === 8) {
        //처음 인덱스부터 비교해서 둘다 8일 경우에만 카운트 증가, 인덱스 증가
        //console.log("idx 감지", idx);
        count++;
        idx++;
      } else {
        if(left[idx]!=right[idx])
        {
          break;
        }
        idx++;
      }
    }
    console.log(count);
  }
}