
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let idx = 0;
const T = Number(input[idx++]); // 테스트 케이스 개수

let output = [];

for (let t = 0; t < T; t++) {
    const N = Number(input[idx++]); // 날 수
    const prices = input[idx++].split(' ').map(Number); // 날 별 주가

    let maxPrice = 0; // 문제를 바라보는 관점을 조금 달리해서 어짜피
    //최고가로 판매를 하려면 그 값으로 기준을 잡고 그보다 낮은 값은 차익으로만 계산해서
    //누적합을 저해주면 됨
    let profit = 0n;  

    // 미래의 최고가를 기준으로 계산해야 하므로 뒤에서부터 본다
    for (let i = N - 1; i >= 0; i--) {

        // 지금까지 본 값 중 가장 큰 값이 "미래 최고가"
        if (prices[i] > maxPrice) {
            maxPrice = prices[i];
        } else {
            // 그냥 미래의 최고가를 간다고 가정하고
            // 그 값으로 바꿔서 (미래 최고가 - 오늘 가격)
            // 전부 더하면 된다
            profit += BigInt(maxPrice - prices[i]);
        }
    }

    output.push(profit.toString());
}

console.log(output.join('\n'));