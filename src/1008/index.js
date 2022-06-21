const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [num, hours, salary] = lines.map(Number);

function formattedSalary(n, h, s) {
  const workerSalary = h * s;
  return `NUMBER = ${n}\nSALARY = U$ ${workerSalary.toFixed(2)}`;
}

console.log(formattedSalary(num, hours, salary));
