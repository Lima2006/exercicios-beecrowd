const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const { evaluateAll } = require("../utils.js");

const samples = [
  { input: "556", output: ["0:9:16"] },
  { input: "1", output: ["0:0:1"] },
  { input: "140153", output: ["38:55:53"] },
];

const resolution = (lines, console) => {
  const calcTime = (input) => {
    const formattedTime = { seconds: 0, minutes: 0, hours: 0 };
    formattedTime.seconds = input % 60;
    formattedTime.minutes = Math.floor((input / 60) % 60);
    formattedTime.hours = Math.floor(input / 3600);
    return formattedTime;
  };
  const formatAnswer = (hours, minutes, seconds) =>
    `${hours}:${minutes}:${seconds}`;

  const seconds = Number(lines[0]);
  const calculatedTime = calcTime(seconds);
  const answer = [
    calculatedTime.hours,
    calculatedTime.minutes,
    calculatedTime.seconds,
  ];

  console.log(formatAnswer(...answer));
};

evaluateAll(resolution, samples);
