const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const calcFuelExpense = (time, velocity, consumption) => {
  const distance = time * velocity;
  return distance / consumption;
};
const formattedAnswer = (answer) => `${answer.toFixed(3)}`;
const inputToNumber = (input) => Number(input);
const presentAnswer = (answer) => console.log(formattedAnswer(answer));

const averageFuelConsumption = 12;
const [time, velocity] = [inputToNumber(lines[0]), inputToNumber(lines[1])];
const answer = calcFuelExpense(time, velocity, averageFuelConsumption);

presentAnswer(answer);
