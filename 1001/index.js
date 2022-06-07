const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const { evaluateAll } = require("../utils.js");

const samples = [
  { input: "10\n9", output: ["X = 19"] },
  { input: "-10\n4", output: ["X = -6"] },
  { input: "15\n-7", output: ["X = 8"] },
];

const resolution = (lines, console) => {
  const adaptParams = (lines) => lines.filter(Boolean).map(Number);
  const sumValues = (values) => values.reduce((acc, value) => acc + value, 0);
  const formatAnswer = (x) => `X = ${x}`;

  const values = adaptParams(lines);
  const totalValue = sumValues(values);
  console.log(formatAnswer(totalValue));
};

console.table(evaluateAll(resolution, samples));
