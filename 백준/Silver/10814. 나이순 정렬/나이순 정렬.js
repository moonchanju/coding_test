//정답코드
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);

const arr = input.slice(1).map(line => {
    const [age, name] = line.split(" ");
    return [Number(age), name];
});

arr.sort((a, b) => a[0] - b[0]);

console.log(arr.map(v => v.join(" ")).join("\n"));