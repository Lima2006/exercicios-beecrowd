const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const { evaluateAll } = require("../utils.js");

const samples = [
  { input: "5 6 7 8\n", output: ["Valores nao aceitos"] },
  { input: "2 3 2 6\n", output: ["Valores aceitos"] },
];

const resolution = (lines, console) => {
  const convertLineToNumbers = (input) =>
    input.filter(Boolean);
  const calcSelectionTest = ([a, b, c, d]) =>
    b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 === 0;
  const formatAnswer = (status) =>
    status ? "Valores aceitos" : "Valores nao aceitos";

  const values = convertLineToNumbers(lines);
  const answer = calcSelectionTest(values);
  console.log(formatAnswer(answer));
};

console.table(evaluateAll(resolution, samples));
