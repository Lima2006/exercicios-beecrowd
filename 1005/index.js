const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [a, b] = lines.map(Number);

function averageNumber(a, b) {
  const result = (a * 3.5) / 11 + (b * 7.5) / 11;
  return result.toFixed(5);
}

console.log(`MEDIA = ${averageNumber(a, b)}`);
