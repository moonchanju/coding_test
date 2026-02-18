const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const commands = input.slice(1).map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  // 값 삽입
  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // 최소값 제거 및 반환
  pop() {
    // 현재 힙배열의 사이즈가 0 이거나 1 일 경우의 대처 로직 -> 0일경우에는 0을 리턴, 1일 경우 힙 삭제후 정렬 관련 로직이 필요 없으므로 바로 pop 을 하면 됨
    if (this.size() === 0) return 0;
    if (this.size() === 1) return this.heap.pop();
    //반대로 배열의 사이즈가 1보다 클 경우의 대처로직인데 루트노드를 min 값에 담고, 그 값을 마지막 노드의 pop 값을 뺀 뒤 대체
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    //그 뒤 정렬 로직을 사용하고
    this.heapifyDown();
    //루트노드를 반환하는 형식으로 진행
    return min;
  }
   // 삽입의 경우 -> 만약 새로 넣은 값이 부모보다 작게되면 올라가게 만들어야함.
  // 위로 올라가며 정렬
  heapifyUp() {
    let idx = this.heap.length - 1;
     //방금 push 한 값의 위치
    while (idx > 0) 
      //idx>0 -> 0번 인덱스가 아닐동안 (루트인덱스가 아닐동안)반복
    //루트는 부모가 없으니까 더이상 올라가기가 불가능함
    {
      //왼쪽 자식이건 오른쪽 자식이건( 푸시한 값이) , 푸시한 인덱스의 -1 을 하고 2를 나눈뒤 소수점제거로직으로 
      //구할수있다
      const parent = Math.floor((idx - 1) / 2);
      //만약 부모보다 자식이 크면 반복문 탈출
      if (this.heap[parent] <= this.heap[idx]) break;
      //그게 아니면 배열의 값을 바꿔준다, 인덱스 안에 들어있는 값만 바뀌게 된다.
      [this.heap[parent], this.heap[idx]] =
        [this.heap[idx], this.heap[parent]];

      idx = parent; //현재 보고있는 idx 인덱스의 위치가 변하게 됨.
    }
  }

  //루트노드 삭제이후 새로운 노드가 루트노드로 가고 나서 값을 제자리로 복구하는 과정을 통해 한다.

  heapifyDown() {
    let idx = 0;
    //루트노드부터 시작
    const length = this.heap.length;
    //배열 범위 체크용으로 length 라는 변수 선언

    while (true) {
      const left = idx * 2 + 1;
      const right = idx * 2 + 2;
      //현재노드의 왼쪽 , 그리고 오른쪽 자식
      let smallest = idx;
      //현재 노드의 기준 값

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      //현재 노드의 왼쪽 자식이 length (배열 범위안에 있나)를 만족하면서 동시에 자식이 부모보다 작으면 
      //현재노드를 최신화 시킴 

      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === idx) break;
      //만약 부모가 자식보다 작거나 같으면 -> 멈춤 . 위 조건 두개를 다 통과 못했을시 이미 부모가 자식보다
      //작은 경우에 속하기에 반복문 탈출하면 됨

      [this.heap[idx], this.heap[smallest]] =
        [this.heap[smallest], this.heap[idx]];

      idx = smallest;
      //인덱스는 놔두고 값만 교체하는 로직으로 다시 진행.
    }
  }
}

const heap = new MinHeap();
let output = [];

for (const x of commands) {
  if (x === 0) { 
    output.push(heap.pop());
  } else {
    heap.push(x);
  }
}

console.log(output.join("\n"));