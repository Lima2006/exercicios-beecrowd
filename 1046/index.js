const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const splitNumbersBySpace = (input) => {
  const values = input.split(" ");
  for (let i in values) {
    values[i] = Number(values[i]);
  }
  return values;
};
const gameDuration = ([start, end]) => {
  if (end - start < 0) {
    return end + 24 - start;
  } else if (end - start === 0) {
    return 24;
  } else if (end - start > 0) {
    return end - start;
  }
};
const formattedAnswer = (input) => `O JOGO DUROU ${input} HORA(S)`;
const presentAnswer = (input) => console.log(formattedAnswer(input));

const baseValues = splitNumbersBySpace(lines[0]);
const answer = gameDuration(baseValues);

presentAnswer(answer);
