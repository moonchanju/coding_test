const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;
const N = Number(input[idx++]);

const numbers = input[idx++].split(" ").map(Number);
//console.log(numbers);
//사용할 숫자
const [plus, minus, multiply, divide] = input[idx++].split(" ").map(Number);
//console.log(plus,minus);
//합,차,곱,나누기의 갯수를 직접적으로 받아준다.
let max = -Infinity;
let min = Infinity;
function dfs(idx, total, pl, mi, mu, di) {
  if (idx === N) {
    //console.log(total);
    max = Math.max(max, total);
    min = Math.min(min, total);
    return;
  }
  //(중요) 연산자들의 갯수를 --의 전위 또는 후위연산자로 해버리면 -> dfs가 재귀호출을
  //진행함에 따라 모든 분기에 영향을 미쳐버림으로 각 분기에 독립적인 감소된 값을 가지게
  //함
  if (pl > 0) {
    dfs(idx + 1, total + numbers[idx], pl - 1, mi, mu, di);
  }
  if (mi > 0) {
    dfs(idx + 1, total - numbers[idx], pl, mi - 1, mu, di);
  }
  if (mu > 0) {
    dfs(idx + 1, total * numbers[idx], pl, mi, mu - 1, di);
  }
  if (di > 0) {
    let next ;
    if (total < 0) {
      total= -Math.floor(-total / numbers[idx]);
      //total = -Math.floor(-total / numbers[idx]) 
      //-> 
    } else {
      total= Math.floor(total / numbers[idx]);
    }
    dfs(idx + 1, total, pl, mi, mu, di - 1);
  }
}

dfs(1, numbers[0], plus, minus, multiply, divide);

console.log(`${max}\n${min}`) // template 메서드를 통해 출력하시면 됩니다..
