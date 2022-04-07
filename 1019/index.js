const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const firstInputToNumber = (input) => Number(input[0]);
const calcTime = (input) => {
  const formattedTime = {seconds: 0, minutes: 0, hours: 0};
  formattedTime.seconds = input % 60;
  formattedTime.minutes = Math.floor((input / 60) % 60);
  formattedTime.hours = Math.floor(input / 3600);
  return [formattedTime.hours, formattedTime.minutes, formattedTime.seconds];
};
const formattedAnswer = (hours, minutes, seconds) =>
  `${hours}:${minutes}:${seconds}`;
const presentAnswer = (answer) => console.log(formattedAnswer(...answer));

const seconds = firstInputToNumber(lines);
const answer = calcTime(seconds);

presentAnswer(answer);
