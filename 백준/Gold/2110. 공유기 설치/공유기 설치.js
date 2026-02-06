const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, C] = input[0].split(" ").map(Number);
const graph = [];
for (let i = 1; i <= N; i++) {
  graph.push(Number(input[i]));
}

const house = graph.sort((a, b) => a - b);

function canInstall(distance) {
  let last = house[0]; //최초 집은 (house[0]) 무조건 선택 
    let count = 1; // 선택했으니 공유기수 한개 세팅
  for (let i = 1; i < N; i++) {
   
    if (house[i] - last >= distance) {
      count++; //공유기 두기
      last = house[i]; //해당 지점을 기준으로 for문에 다시 투입이 됨.
    }
  }
  return count>=C;
  //
  //전체 공유기 개수를 리턴 -> 나중에 함수에서 count 보다 크거나 작은 값을 선택시 이분탐색으로 범위 좁혀나감
}
let answer = 0;
function binSearch() {
  let left = 1;
  let right = house[house.length - 1] - house[0];
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    //초기 distance를 정해줌. -> 탐색 가능 거리의 절반 지점부터 탐색
    if (canInstall(mid)) {
      //공유기개수 초과여부 확인후 이분탐색 진행
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(answer);
  //answer에 저장한 가능 거리중 조건 만족하는것 하나만을 출력함.
}

binSearch();
