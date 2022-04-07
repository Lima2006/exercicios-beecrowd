const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const firstValueOfArrayToNumber = (input) => Number(input[0]);
const calcCircleVolume = (radius, pi) => (4 / 3) * pi * Math.pow(radius, 3);

const PI = 3.14159;
const radius = firstValueOfArrayToNumber(lines);
const answer = calcCircleVolume(radius, PI);
const formattedAnswer = `VOLUME = ${answer.toFixed(3)}`;
const presentAnswer = (item) => console.log(item);
presentAnswer(formattedAnswer);
