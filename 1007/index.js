const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const medias = lines.map(Number);

function difference(a, b, c, d) {
  return a * b - c * d;
}

console.log(`DIFERENCA = ${difference(...medias)}`);
