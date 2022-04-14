const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const grades = lines[0].split(" ")
const grade = [Number(lines[1]), Number(grades[0]), Number(grades[1]), Number(grades[2]), Number(grades[3])]

const calcAverageGrade = (grades) => {
  
}

console.log(calcAverageGrade(grade))
