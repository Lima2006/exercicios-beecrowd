const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [a, b] = lines.map(Number);
const x = a + b;
console.log(`X = ${x}`);