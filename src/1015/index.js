const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const { evaluateAll } = require("../utils.js")

const samples = [
  {input: "1.0 7.0\n5.0 9.0", output: ["4.4721"]},
  {input: "-2.5 0.4\n12.1 7.3", output: ["16.1484"]},
  {input: "2.5 -0.4\n-12.2 7.0", output: ["16.4575"]},
]

const resolution = (lines, console) => {
  const [x1, y1] = lines[0].split(" ").filter(Boolean).map(Number)
  const [x2, y2] = lines[1].split(" ").filter(Boolean).map(Number)
  const calcDistance = (x1, y1, x2, y2) =>
    Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  const formatAnswer = (input) => input.toFixed(4);
  const answer = calcDistance(x1, y1, x2, y2);
  
  console.log(formatAnswer(answer));
}

evaluateAll(resolution, samples)
