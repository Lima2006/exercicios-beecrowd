const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const { evaluateAll } = require("../utils.js");

const samples = [
  { input: "25.01", output: ["Intervalo (25,50]"] },
  { input: "25.00", output: ["Intervalo [0,25]"] },
  { input: "100.00", output: ["Intervalo (75,100]"] },
  { input: "-25.02", output: ["Fora de intervalo"] },
];

const resolution = (lines, console) => {
  const calcTheInterval = (value) => {
    if (value >= 0 && value <= 25) return "Intervalo [0,25]";
    if (value > 25 && value <= 50) return "Intervalo (25,50]";
    if (value > 50 && value <= 75) return "Intervalo (50,75]";
    if (value > 75 && value <= 100) return "Intervalo (75,100]";
    return "Fora de intervalo";
  };

  const primaryValue = Number(lines[0]);
  const answer = calcTheInterval(primaryValue);

  console.log(answer);
};

evaluateAll(resolution, samples);
