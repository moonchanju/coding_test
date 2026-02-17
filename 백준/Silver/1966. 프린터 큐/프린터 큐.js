const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;
const testCase = Number(input[idx++]);

for (let i = 0; i < testCase; i++) {
  let count = 0;
  const [N, M] = input[idx++].split(" ").map(Number);
  const rank = input[idx++].split(" ").map(Number);

  let queue = rank.map((value, index) => ({
    priority: value,
    index: index,
  }));
  //찾으려는 값
  //우선순위와 인덱스 기준으로 찾는건가

  while (true) {
    const current = queue.shift();
    let hashigher = false;
    for (let i = 0; i < queue.length; i++) {
      if (
        queue[i].priority > current.priority
      ) //하나라도 현재의 우선순위가 더 큰것이 있다면
      {
        hashigher = true;
        break;
      }
    }
    //우선순위가 높은게 있을 경우
    if (hashigher) {
      queue.push(current);
    }
    //자신이 우선순위가 제일 큰 경우
    else {
      //우선순위가 더 큰것이 없다 -> count를 증가시키고 떠난다.
      count++;
      //카운트만 증가시키고 종료 ->
      if (current.index === M) {
        console.log(count);
        break;
      }
    }
  }
}
