const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const { evaluateAll } = require("../utils.js");

const samples = [
  { input: "10.0 20.1 5.1", output: ["R1 = -0.29788\nR2 = -1.71212"] },
  { input: "0.0 20.0 5.0", output: ["Impossivel calcular"] },
  { input: "10.3 203.0 5.0", output: ["R1 = -0.02466\nR2 = -19.68408"] },
  { input: "10.0 3.0 5.0", output: ["Impossivel calcular"] },
];

const resolution = (lines, console) => {
  const convertLineToNumbers = (input) => input.split(" ").map(Number);
  const calcBhaskara = (a, b, c) => {
    const delta = Math.pow(b, 2) - 4 * a * c;
    if (delta >= 0 && a > 0) {
      const r1 = (-b + Math.sqrt(delta)) / (2 * a);
      const r2 = (-b - Math.sqrt(delta)) / (2 * a);
      return { r1, r2 };
    }
    return false;
  };
  const formatAnswer = (input) => {
    return input === false
      ? "Impossivel calcular"
      : `R1 = ${input.r1.toFixed(5)}\nR2 = ${input.r2.toFixed(5)}`;
  };

  const [a, b, c] = convertLineToNumbers(lines[0]);
  const answer = calcBhaskara(a, b, c);

  console.log(formatAnswer(answer));
};

evaluateAll(resolution, samples);
