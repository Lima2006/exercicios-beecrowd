const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const { evaluateAll, transformTextToSamples } = require("../utils");

const samples = transformTextToSamples(input);

const monthsList = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

const resolution = (lines, console) => {
  const adaptInput = (input) => Number(input[0]);
  const findMonth = ({ monthsList, monthNumber }) => monthsList[monthNumber];

  const monthNumber = adaptInput(lines);
  const answer = findMonth({ monthNumber, monthsList });

  console.log(answer);
};

evaluateAll(resolution, samples);
