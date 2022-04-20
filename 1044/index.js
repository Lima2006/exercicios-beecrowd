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
const isMultiple = (input) => {
  const numbers = input.sort((a, b) => a - b);
  if (numbers[1] % numbers[0] === 0) {
    return true;
  }
};
const formattedAnswer = (input) => {
  if (input) {
    return "Sao Multiplos";
  } else return "Nao sao Multiplos";
};
const presentAnswer = (input) => console.log(formattedAnswer(input));

const answer = isMultiple(splitAndNumber(lines[0]));

presentAnswer(answer);
