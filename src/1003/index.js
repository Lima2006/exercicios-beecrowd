const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const adaptInput = (input) => input.filter(Boolean).map(Number);
const sum = (...values) => values.reduce((acc, val) => acc + val, 0);
const formatAnswer = (answer) => `SOMA = ${answer}`

const values = adaptInput(lines)
const answer = sum(...values)

console.log(formatAnswer(answer));
