const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const { evaluateAll } = require("../utils.js")

samples = [
  { input: "3\n", output: ["VOLUME = 113.097"] },
  { input: "15\n", output: ["VOLUME = 14137.155"] },
  { input: "1523\n", output: ["VOLUME = 14797486501.627"] },
];

const resolution = (lines, console) => {
  const calcCircleVolume = (radius, pi) => (4 / 3) * pi * Math.pow(radius, 3);
  const arrayToSingleNumber = (input) => Number(input[0]);

  const PI = 3.14159;
  const radius = arrayToSingleNumber(lines);
  const answer = calcCircleVolume(radius, PI);
  const formatAnswer = (answer) => `VOLUME = ${answer.toFixed(3)}`;

  console.log(formatAnswer(answer));
};

evaluateAll(resolution, samples);
