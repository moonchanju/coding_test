

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;
const T = Number(input[idx++]); 
let output = [];

for (let t = 0; t < T; t++) {
    const N = Number(input[idx++]); // 지원자 수
    let applicants = []; 

    // 지원자 정보 입력
    for (let i = 0; i < N; i++) {
        const [doc, interview] = input[idx++].split(" ").map(Number);
        applicants.push([doc, interview]);
        //베열속 배열의 느낌으로 지원자들의 정보를 입력해둠.
    }

    //doc (서류) 기준으로 크기순으로 정렬함
    //-> 면접으로 하건 서류로 하건 어느 전형으로건 1순위를 가진 것들중 비교가 들어가면 됨.
    applicants.sort((a, b) => a[0] - b[0]);

   //어느 면접의 1등이건 선발되는건 확정 -> 왜? 뒤떨어지는 과목이 없는게 하나는 확정이라
    let count = 1;
    let bestInterview = applicants[0][1];
    //그래서 초기 카운트와 합격자를 증가

    // 이후 지원자들 검사
    for (let i = 1; i < N; i++) {
        const interviewRank = applicants[i][1];
        //서류는 어짜피 다른 지원자들이 떨어지니 , 면접 순위를 기준으로 자기보다 높으면 합격

        // 핵심 로직
        // 서류는 이미 앞사람보다 무조건 나쁨
        // → 면접 성적이 지금까지 본 사람들보다 좋으면 선발
        if (interviewRank < bestInterview) {
            count++;
            bestInterview = interviewRank; // 기준 갱신
        }
    }

    output.push(String(count));
}

// 결과 출력
console.log(output.join("\n"));