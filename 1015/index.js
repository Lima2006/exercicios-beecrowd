const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const splitBySpace = (input) => {
  input = input.split(" ");
  return input;
};
const arrayStringsToNumber = (input) => {
  for (let n in input) {
    input[n] = Number(input[n]);
  }
  return input;
};
const calcDistance = (x1, y1, x2, y2) =>
  Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
const formattedAnswer = (input) => input.toFixed(4);

const [x1, y1, x2, y2] = [
  ...arrayStringsToNumber(splitBySpace(lines[0])),
  ...arrayStringsToNumber(splitBySpace(lines[1])),
];
const answer = calcDistance(x1, y1, x2, y2);

console.log(formattedAnswer(answer));
