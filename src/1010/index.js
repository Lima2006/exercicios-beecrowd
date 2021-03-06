const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const { evaluateAll } = require("../utils");

const samples = [
  {
    input: "12 1 5.30\n16 2 5.10",
    output: ["VALOR A PAGAR: R$ 15.50"],
  },
  {
    input: "13 2 15.30\n161 4 5.20",
    output: ["VALOR A PAGAR: R$ 51.40"],
  },
  {
    input: "1 1 15.10\n2 1 15.10",
    output: ["VALOR A PAGAR: R$ 30.20"],
  },
];

const resolution = (lines, console) => {
  const convertLineToProduct = (line) => {
    const [code, amount, price] = line.split(" ").map(Number);
    return { code, amount, price };
  };
  const adaptParams = (lines) =>
    lines.filter(Boolean).map(convertLineToProduct);
  const totalizeValueToPay = (products) => {
    return products.reduce((acc, { amount, price }) => acc + amount * price, 0);
  };
  const formatAnswer = (answer) => `VALOR A PAGAR: R$ ${answer.toFixed(2)}`;

  const products = adaptParams(lines);
  const valueToPay = totalizeValueToPay(products);
  console.log(formatAnswer(valueToPay));
};

evaluateAll(resolution, samples)
