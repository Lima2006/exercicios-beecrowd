const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const { evaluateAll } = require("../utils.js");

const samples = [
  { input: "6 24\n", output: ["Sao Multiplos"] },
  { input: "6 25\n", output: ["Nao sao Multiplos"] },
];

const resolution = (lines, console) => {
  const convertLineToNumbers = (input) =>
    input.split(" ").map(Number);
  const isMultiple = (input) => {
    const numbers = input.sort((a, b) => a - b);
    return numbers[1] % numbers[0] === 0;
  };
  const formatAnswer = (input) => {
    if (input) {
      return "Sao Multiplos";
    } else return "Nao sao Multiplos";
  };

  const numberValues = convertLineToNumbers(lines[0])
  const answer = isMultiple(numberValues)

  console.log(formatAnswer(answer));
};

evaluateAll(resolution, samples);
