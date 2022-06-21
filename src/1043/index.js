const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const splitAndNumber = (input) => {
  let divided = input.split(" ");
  for (let i in divided) {
    divided[i] = parseFloat(divided[i]);
  }
  return divided;
};
const calcTrianglePerimeter = (a, b, c) => {
  return a + b + c;
};
const calcTrapezeArea = (b, B, h) => {
  return Math.round((((b + B) * h) / 2) * 10) / 10;
};
const isTriangle = ([a, b, c]) => {
  if (
    a - b < c &&
    c < a + b &&
    b - c < a &&
    a < b + c &&
    c - a < b &&
    b < c + a
  )
    return [true, calcTrianglePerimeter(a, b, c)];
  else return [false, calcTrapezeArea(a, b, c)];
};
const formattedAnswer = (triangle, value) => {
  if (triangle) return `Perimetro = ${value.toFixed(1)}`;
  else return `Area = ${value.toFixed(1)}`;
};
const presentAnswer = (input) => console.log(input);

const answer = isTriangle(splitAndNumber(lines[0]));

presentAnswer(formattedAnswer(...answer));
