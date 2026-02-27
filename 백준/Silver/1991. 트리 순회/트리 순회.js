const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

//객체 -> 키 와 값 형태로 저장해서 키는 본인 노드
//값은 자싟 노드를 저장(배열 형식으로)
const tree = {};

// 입력 처리
for (let i = 1; i <= N; i++) {
  const [node, left, right] = input[i].split(" ");
  tree[node] = [left, right];
  //대괄호 표기법으로 객체에 값을 저장하기
  //key에 node , value 에 배열
 //{node : [left,right]} 형식
}

let preorder = "";
let inorder = "";
let postorder = "";

function dfs(node) {
  if (node === ".") return;
  //자식 노드가 없을 경우

  const [left, right] = tree[node];
  //node 를 매개변수로 주면 tree 객체 안의 배열을 
  //저장한 상태이기에 left 와 right 의 값을 꺼내올수있다.

  // 전위 순회
  preorder += node;

  dfs(left);
  //왼쪽 자식 노드를 매개변수로 넘겨 재귀 

  // 중위 순회
  inorder += node;

  dfs(right);

  // 후위 순회
  postorder += node;
}

// 항상 A가 루트
dfs("A");

console.log(preorder);
console.log(inorder);
console.log(postorder);