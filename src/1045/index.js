const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const { evaluateAll } = require("../utils.js");

const samples = [
  {
    input: "7.0 5.0 7.0\n",
    output: ["TRIANGULO ACUTANGULO\nTRIANGULO ISOSCELES"],
  },
  {
    input: "6.0 6.0 10.0\n",
    output: ["TRIANGULO OBTUSANGULO\nTRIANGULO ISOSCELES"],
  },
  {
    input: "6.0 6.0 6.0\n",
    output: ["TRIANGULO ACUTANGULO\nTRIANGULO EQUILATERO"],
  },
  { input: "5.0 7.0 2.0\n", output: ["NAO FORMA TRIANGULO"] },
  { input: "6.0 8.0 10.0\n", output: ["TRIANGULO RETANGULO"] },
];

const resolution = (lines, console) => {
  const convertLineToNumbers = (input) => input.split(" ").map(Number);
  const sortDescending = (input) => input.sort((a, b) => b - a);
  const whatTriangle = (a, b, c) => {
    const result = [];
    if (a >= b + c) return ["NAO FORMA TRIANGULO"];
    if (Math.pow(a, 2) === Math.pow(b, 2) + Math.pow(c, 2))
      result.push("TRIANGULO RETANGULO");
    if (Math.pow(a, 2) > Math.pow(b, 2) + Math.pow(c, 2))
      result.push("TRIANGULO OBTUSANGULO");
    if (Math.pow(a, 2) < Math.pow(b, 2) + Math.pow(c, 2))
      result.push("TRIANGULO ACUTANGULO");
    if (a === b && b === c) result.push("TRIANGULO EQUILATERO");
    else if (a === b || b === c || c === a) result.push("TRIANGULO ISOSCELES");
    return result;
  };
  const formatAnswer = (input) => input.join("\n");

  const inputValues = convertLineToNumbers(lines[0]);
  const answer = whatTriangle(...sortDescending(inputValues));

  console.log(formatAnswer(answer));
};

evaluateAll(resolution, samples);
