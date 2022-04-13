const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const splitBySpaceAndNumber = (input) => {
  let result = input.split(" ");
  for (let i in result) {
    result[i] = Number(result[i]);
  }
  return result;
};
const calcSelectionTest = (a, b, c, d) => {
  if (b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 === 0) {
    return true;
  } else return false;
};
const formattedAnswer = (trueOrFalse) =>
  trueOrFalse ? "Valores aceitos" : "Valores nao aceitos";
const presentAnswer = (answer) => console.log(formattedAnswer(answer));

const [a, b, c, d] = splitBySpaceAndNumber(lines[0]);
const answer = calcSelectionTest(a, b, c, d);

presentAnswer(answer);
