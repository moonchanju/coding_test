const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [A, K] = input[0].split(" ").map(Number);
//console.log(A, K);
let count = 0;
if (K === A) {
  console.log(0);
}
while (K > A) {
  if (K % 2 === 0) {
    //console.log("2나눔 사용");
    if (K / 2 < A) {
     // console.log("설마");
      K = K - 1;
      count++;
      if (K === A) {
        console.log(count);
        break;
      }
    } else {
      K = K / 2;
      //console.log("2의K", K);
      count++;
      if (K === A) {
        // console.log("2나눔 사용");
        console.log(count);
        break;
      }
    }
  } else {
    //console.log("1빼기 사용");
    K--;
    //console.log("1의K", K);
    count++;
    if (K === A) {
      // console.log("1빼기 사용");
      console.log(count);
      break;
    }
  }
}
