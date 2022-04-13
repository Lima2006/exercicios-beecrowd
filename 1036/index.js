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
const calcBhaskara = (a, b, c) => {
  const delta = Math.pow(b, 2) - 4 * a * c;
  if (delta >= 0 && a > 0) {
    const r1 = (-b + Math.sqrt(delta)) / (2 * a);
    const r2 = (-b - Math.sqrt(delta)) / (2 * a);
    return { r1: r1, r2: r2 };
  } else {
    return false;
  }
};
const formattedAnswer = (input) => {
  if (input === false) {
    return "Impossivel calcular";
  } else if (input.r1 && input.r2) {
    return `R1 = ${input.r1.toFixed(5)}\nR2 = ${input.r2.toFixed(5)}`;
  }
};
const presentAnswer = (answer) => console.log(formattedAnswer(answer));

const [a, b, c] = splitBySpaceAndNumber(lines[0]);
const answer = calcBhaskara(a, b, c);

presentAnswer(answer);
