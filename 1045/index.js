const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const splitAndNumber = (input) => {
  let result = input;
  result = result.split(" ");
  for (let i in result) {
    result[i] = parseFloat(result[i]);
  }
  return result;
};
const sortDescending = (input) => {
  return input.sort((a, b) => b - a);
};
const whatTriangle = (a, b, c) => {
  let result = [];
  if (a >= b + c) return "NAO FORMA TRIANGULO";
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
const formattedAnswer = (input) => {
  if (typeof input === "object" && input.length > 1) {
    let result = "";
    for (let i in input) {
      if (i < input.length - 1) {
        result += input[i] + "\n";
      } else {
        result += input[i];
      }
    }
    return result;
  } else return input.toString();
};
const presentAnswer = (input) => console.log(input);

const answer = whatTriangle(...sortDescending(splitAndNumber(lines[0])));

presentAnswer(formattedAnswer(answer));
