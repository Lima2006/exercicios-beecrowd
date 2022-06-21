const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [itemNumber, quantity] = [
  Number(lines[0].split(" ")[0]),
  Number(lines[0].split(" ")[1]),
];
const productsPrice = [undefined, 4, 4.5, 5, 2, 1.5];

const calcTotalPrice = (num, quant) => {
  return productsPrice[num] * quant;
};
const formattedAnswer = (answer) => `Total: R$ ${answer.toFixed(2)}`;
const presentAnswer = (answer) => console.log(formattedAnswer(answer));

const answer = calcTotalPrice(itemNumber, quantity);

presentAnswer(answer);
