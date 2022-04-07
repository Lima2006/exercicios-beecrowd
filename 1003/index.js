const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const soma = lines.map(Number).reduce((total, atual) => total + atual, 0);

console.log(`SOMA = ${soma}`);
