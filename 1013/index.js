const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const initialInput = lines[0].split(" ");
const inputArrayOf3ToNumber = (input) => {
  for (let i in input) {
    input[i] = Number(input[i]);
  }
  return input;
};
const higherNumber = (input) => {
  let higher = 0;
  let num = inputArrayOf3ToNumber(input);
  for (let i = 0; i < input.length - 1; i++) {
    const calcHigher =
      (num[i] + num[i + 1] + Math.abs(num[i] - num[i + 1])) / 2;
    if (calcHigher > higher) {
      higher = calcHigher;
    }
  }
  return higher;
};

const answer = higherNumber(initialInput);
const formattedAnswer = `${answer} eh o maior`;
const presentAnswer = () => console.log(formattedAnswer);

presentAnswer();
