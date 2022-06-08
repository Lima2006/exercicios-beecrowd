const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const { evaluateAll } = require("../utils.js");

const samples = [
  {
    input: "3.0 4.0 5.2",
    output: [
      "TRIANGULO: 7.800\nCIRCULO: 84.949\nTRAPEZIO: 18.200\nQUADRADO: 16.000\nRETANGULO: 12.000",
    ],
  },
  {
    input: "12.7 10.4 15.2",
    output: [
      "TRIANGULO: 96.520\nCIRCULO: 725.833\nTRAPEZIO: 175.560\nQUADRADO: 108.160\nRETANGULO: 132.080",
    ],
  },
];

const resolution = (lines, console) => {
  const convertLineToNumbers = (input) => input[0].split(" ").map(Number);
  const [a, b, c] = convertLineToNumbers(lines);
  const calcTriangleArea = (base, height) => (base * height) / 2;
  const calcCircleArea = (radius, PI) => PI * Math.pow(radius, 2);
  const calcTrapeziumArea = (largerBase, smallerBase, height) =>
    ((largerBase + smallerBase) * height) / 2;
  const calcSquareArea = (side) => Math.pow(side, 2);
  const calcRectangleArea = (base, height) => base * height;
  const formatAnswer = ([triangle, circle, trapezium, square, rectangle]) =>
    `TRIANGULO: ${triangle.toFixed(3)}\nCIRCULO: ${circle.toFixed(
      3
    )}\nTRAPEZIO: ${trapezium.toFixed(3)}\nQUADRADO: ${square.toFixed(
      3
    )}\nRETANGULO: ${rectangle.toFixed(3)}`;

  const PI = 3.14159;
  const answer = [
    calcTriangleArea(a, c),
    calcCircleArea(c, PI),
    calcTrapeziumArea(a, b, c),
    calcSquareArea(b),
    calcRectangleArea(a, b),
  ];

  console.log(formatAnswer(answer));
};

evaluateAll(resolution, samples);
