const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const { evaluateAll, transformTextToSmples } = require("../utils");

const samples = transformTextToSmples(input);

const resolution = (lines, console) => {
  const adaptInput = (input) => input.filter(Boolean).map(Number);
  const isPositive = (input) => input > 0;
  const filterNumbersByCondition = ({ input, condition }) => {
    const resultingNumbers = input.filter(condition);
    const resultLength = resultingNumbers.length;
    return { resultingNumbers, resultLength };
  };
  const formatAnswer = (answer) => `${answer} valores positivos`;

  const inputNumbers = adaptInput(lines);
  const { resultLength: answer } = filterNumbersByCondition({
    input: inputNumbers,
    condition: isPositive,
  });

  console.log(formatAnswer(answer));
};

evaluateAll(resolution, samples);
