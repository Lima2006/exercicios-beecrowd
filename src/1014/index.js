const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const { evaluateAll } = require("../utils.js");

const samples = [
  { input: "500\n35.0", output: ["14.286 km/l"] },
  { input: "2254\n124.4", output: ["18.119 km/l"] },
  { input: "4554\n464.6", output: ["9.802 km/l"] },
];

const resolution = (lines, console) => {
  const inputToNumber = (input) => input.filter(Boolean).map(Number);
  const averageConsumption = (dis, con) => dis / con;
  const formatAnswer = (answer) => `${answer.toFixed(3)} km/l`;

  const [distance, consumption] = inputToNumber(lines);
  const answer = averageConsumption(distance, consumption);

  console.log(formatAnswer(answer));
};

evaluateAll(resolution, samples);
