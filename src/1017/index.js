const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const { evaluateAll } = require("../utils");

const samples = [
  { input: "10\n85", output: ["70.833"] },
  { input: "2\n92", output: ["15.333"] },
  { input: "22\n67", output: ["122.833"] },
];

const resolution = (lines, console) => {
  const convertArrayToNumbers = (input) => input.filter(Boolean).map(Number);
  const calcFuelExpense = (time, velocity, consumption) =>
    (time * velocity) / consumption;
  const formatAnswer = (answer) => `${answer.toFixed(3)}`;

  const averageFuelConsumption = 12;
  const [time, velocity] = convertArrayToNumbers(lines);
  const answer = calcFuelExpense(time, velocity, averageFuelConsumption);

  console.log(formatAnswer(answer));
};

evaluateAll(resolution, samples);
