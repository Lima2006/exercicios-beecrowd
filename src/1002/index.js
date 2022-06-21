const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const PI = 3.14159;
const radius = parseFloat(lines);
const circleArea = (rad) => {
  let area = PI * Math.pow(rad, 2);
  return area.toFixed(4);
};

console.log(`A=${circleArea(radius)}`);
