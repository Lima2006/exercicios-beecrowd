const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const { evaluateAll } = require("../utils.js");

const samples = [
  { input: "30", output: ["60 minutos"] },
  { input: "110", output: ["220 minutos"] },
  { input: "7", output: ["14 minutos"] },
];

const resolution = (lines, console) => {
  const calcDistance = (velX, velY, distance) =>
    (60 / (velY - velX)) * distance;
  const formatAnswer = (answer) => `${answer} minutos`;

  const velocityX = 60;
  const velocityY = 90;
  const x = Number(lines[0]);
  const answer = calcDistance(velocityX, velocityY, x);

  console.log(formatAnswer(answer));
};

evaluateAll(resolution, samples);
