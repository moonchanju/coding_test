const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const command = input.slice(1);

function sumCalc(str) {
    let sum = 0;
    for (let ch of str) {
        if (ch >= '0' && ch <= '9') sum += Number(ch);
    }
    return sum;
}

// 세 가지 기준으로 비교하는 함수
function compare(a, b) {
    // 1. 길이
    if (a.length !== b.length) return a.length - b.length;

    // 2. 숫자 합
    const sumA = sumCalc(a);
    const sumB = sumCalc(b);
    if (sumA !== sumB) return sumA - sumB;

    // 3. 사전순
    return a < b ? -1 : a > b ? 1 : 0;
}

// 삽입정렬
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;

        // compare 기준으로 key가 arr[j]보다 작으면 arr[j]를 오른쪽으로 이동
        while (j >= 0 && compare(key, arr[j]) < 0) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// 정렬 수행
const finalArray = insertionSort(command);

// 출력
for (let str of finalArray) {
    console.log(str);
}