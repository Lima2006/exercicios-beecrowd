const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const medias = lines.map(Number);

function averageNumber(a) {
  const result = (a[0] * 2) / 10 + (a[1] * 3) / 10 + (a[2] * 5) / 10;
  return result.toFixed(1);
}

console.log(`MEDIA = ${averageNumber(medias)}`);
