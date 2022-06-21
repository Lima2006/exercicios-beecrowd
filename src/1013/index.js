const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const { evaluateAll } = require("../utils.js");

const samples = [
  { input: "7 14 106\n", output: ["106 eh o maior"] },
  { input: "217 14 6\n", output: ["217 eh o maior"] },
];

const resolution = (lines, console) => {
  const convertLineToNumbers = (input) => input.split(" ").map(Number);
  const higherNumber = (input) => {
    let sorted = input.slice(0);
    sorted.sort((a, b) => b - a);
    return sorted[0];
  };

  const numbers = convertLineToNumbers(lines[0]);
  const answer = higherNumber(numbers);
  const formatAnswer = (answer) => `${answer} eh o maior`;
  console.log(formatAnswer(answer));
};

evaluateAll(resolution, samples);
