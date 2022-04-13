const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const firstInputToNumber = (input) => Number(input[0]);
const calcTheInterval = (value) => {
  if (value >= 0 && value <= 25) {
    return "Intervalo [0,25]";
  } else if (value > 25 && value <= 50) {
    return "Intervalo (25,50]";
  } else if (value > 50 && value <= 75) {
    return "Intervalo (50,75]";
  } else if (value > 75 && value <= 100) {
    return "Intervalo (75,100]";
  } else return "Fora de intervalo";
};
const presentAnswer = (answer) => console.log(answer)

const answer = calcTheInterval(firstInputToNumber(lines))

presentAnswer(answer)
