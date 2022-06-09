const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const { evaluateAll } = require("../utils.js");

const samples = [
  { input: "400", output: ["1 ano(s)\n1 mes(es)\n5 dia(s)"] },
  { input: "800", output: ["2 ano(s)\n2 mes(es)\n10 dia(s)"] },
  { input: "30", output: ["0 ano(s)\n1 mes(es)\n0 dia(s)"] },
];

const resolution = (lines, console) => {
  const calcDate = (days) => {
    const result = {
      remaining: days,
      years: 0,
      months: 0,
      days: 0,
    };
    result.years = Math.floor(result.remaining / 365);
    result.remaining = result.remaining % 365;
    result.months = Math.floor(result.remaining / 30);
    result.days = result.remaining % 30;
    return [result.years, result.months, result.days];
  };
  const formatAnswer = (years, months, days) =>
    `${years} ano(s)\n${months} mes(es)\n${days} dia(s)`;

  const days = Number(lines[0]);
  const answer = calcDate(days);

  console.log(formatAnswer(...answer));
};

evaluateAll(resolution, samples);
