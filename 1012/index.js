const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const stringInput = () => {
  let numbers = lines[0].split(" ");
  for (let i in numbers) {
    numbers[i] = Number(numbers[i]);
  }
  return numbers;
};
const [a, b, c] = stringInput();

const PI = 3.14159;

const calcTriangleArea = (base, height) => (base * height) / 2;
const calcCircleArea = (radius, PI) => PI * Math.pow(radius, 2);
const calcTrapeziumArea = (largerBase, smallerBase, height) =>
  ((largerBase + smallerBase) * height) / 2;
const calcSquareArea = (side) => Math.pow(side, 2);
const calcRectangleArea = (base, height) => base * height;
const formattedAnswer = ([triangle, circle, trapezium, square, rectangle]) =>
  `TRIANGULO: ${triangle.toFixed(3)}\nCIRCULO: ${circle.toFixed(
    3
  )}\nTRAPEZIO: ${trapezium.toFixed(3)}\nQUADRADO: ${square.toFixed(
    3
  )}\nRETANGULO: ${rectangle.toFixed(3)}`;
const answer = [
  calcTriangleArea(a, c),
  calcCircleArea(c, PI),
  calcTrapeziumArea(a, b, c),
  calcSquareArea(b),
  calcRectangleArea(a, b),
];

const presentAnswer = () => console.log(formattedAnswer(answer));
presentAnswer();
