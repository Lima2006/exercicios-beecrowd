const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const inputToNumber = (input) => {
  for (let i in input) {
    Number(input[i]);
  }
  return input;
};
const averageConsumption = (dis, con) => dis / con;
const formattedAnswer = (value) => `${value.toFixed(3)} km/l`;
const presentAnswer = () => console.log(formattedAnswer(answer));

const [distance, consumption] = inputToNumber(lines);
const answer = averageConsumption(distance, consumption);

presentAnswer();
