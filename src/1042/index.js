const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const splitAndNumber = (input) => {
  let divided = input.split(" ");
  for (let i in divided) {
    divided[i] = parseInt(divided[i]);
  }
  return divided;
};

const numbers = splitAndNumber(lines[0]);
const sortedNumbers = splitAndNumber(lines[0]).sort((a, b) => a - b);

const formatAnswer = (input) => {
  let result = "";
  input.forEach((value, i) => {
    result += value;
    if (i < input.length - 1) result += "\n";
  });
  return result;
};
const presentAnswer = (answer) => console.log(answer);

const formattedAnswer = `${formatAnswer(sortedNumbers)}\n\n${formatAnswer(numbers)}`;

presentAnswer(formattedAnswer);
