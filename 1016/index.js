const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const inputToNumber = (input) => Number(input);
const calcDistance = (input) => input * 2;
const formattedAnswer = (answer) => `${answer} minutos`;
const presentAnswer = (input) => console.log(formattedAnswer(input));

const x = inputToNumber(lines[0]);
const answer = calcDistance(x);

presentAnswer(answer);
