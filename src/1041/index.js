const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const splitAndNumber = (input) => {
  let divided = input.split(" ");
  for (let i in divided) {
    divided[i] = Math.round(parseFloat(divided[i]) * 10) / 10;
  }
  return divided;
};
const whichQuadrant = ([x, y]) => {
  if (x === 0 && y === 0) return "Origem";
  if (x === 0) return "Eixo Y";
  if (y === 0) return "Eixo X";
  if (x > 0 && y > 0) return "Q1";
  if (x < 0 && y > 0) return "Q2";
  if (x < 0 && y < 0) return "Q3";
  if (x > 0 && y < 0) return "Q4";
};
const presentAnswer = (answer) => console.log(answer);

const answer = whichQuadrant(splitAndNumber(lines[0]));

presentAnswer(answer);
