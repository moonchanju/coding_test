const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [a, b] = input.map(Number);

function change(A, B) {
  let count = 0;
  //배열화

  while (B >=0) {
    const arr = String(B).split("");
    if(A>B) break;
    if (B === A) return count+1;
    if(B===0) break;
    
    if (B % 2 === 0) {
      B = B / 2;
      count++;
    }
    else if (arr[arr.length - 1] === "1") {
      B = Number(arr.slice(0, arr.length - 1).join(""));
      //길이가 1인 문자 배열 ex [1] 을 slice(0,0)을 하면 [] 빈 배열이 나오는데 
      // 이걸 number로 바꾸면 알아서 0 이 됨. -> while문에 걸려 정상 종료
      count++;
    }
    else{
        break;
    }
  }
  return -1;
}

const t = change(a, b);
console.log(t);
