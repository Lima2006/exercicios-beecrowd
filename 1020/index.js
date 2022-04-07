const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const firstInputToNumber = (input) => Number(input[0]);
const calcDate = (days) => {
  const result = {
    years: 0,
    months: 0,
    days: 0,
  };
  result.days = (days % 365) % 30;
  result.months = Math.floor((days % 365) / 30);
  result.years = Math.floor(days / 365);
  return [result.years, result.months, result.days];
};
const formattedAnswer = (years, months, days) =>
  `${years} ano(s)\n${months} mes(es)\n${days} dia(s)`;
const presentAnswer = (answer) => console.log(formattedAnswer(...answer));

const days = firstInputToNumber(lines);
const answer = calcDate(days);

presentAnswer(answer);
