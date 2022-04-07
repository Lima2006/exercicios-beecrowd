const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [sal, com] = [Number(lines[1]), Number(lines[2])];

function salaryWithComission(s, c) {
  const total = s + c * 0.15;
  return `R$ ${total.toFixed(2)}`;
}

console.log(`TOTAL = ${salaryWithComission(sal, com)}`);
