const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const { evaluateAll } = require("../utils.js");

const samples = [
  {
    input: "576",
    output: [
      "576\n5 nota(s) de R$ 100,00\n1 nota(s) de R$ 50,00\n1 nota(s) de R$ 20,00\n0 nota(s) de R$ 10,00\n1 nota(s) de R$ 5,00\n0 nota(s) de R$ 2,00\n1 nota(s) de R$ 1,00",
    ],
  },
  {
    input: "11257",
    output: [
      "11257\n112 nota(s) de R$ 100,00\n1 nota(s) de R$ 50,00\n0 nota(s) de R$ 20,00\n0 nota(s) de R$ 10,00\n1 nota(s) de R$ 5,00\n1 nota(s) de R$ 2,00\n0 nota(s) de R$ 1,00",
    ],
  },
  {
    input: "503",
    output: [
      "503\n5 nota(s) de R$ 100,00\n0 nota(s) de R$ 50,00\n0 nota(s) de R$ 20,00\n0 nota(s) de R$ 10,00\n0 nota(s) de R$ 5,00\n1 nota(s) de R$ 2,00\n1 nota(s) de R$ 1,00",
    ],
  },
];

const resolution = (lines, console) => {
  const bankNotes = [100, 50, 20, 10, 5, 2, 1];
  const countMoney = (value, bankNotes) => {
    let remaining = value;
    return bankNotes.reduce((acc, bankNote) => {
      acc[bankNote] = Math.floor(remaining / bankNote);
      remaining = Number((remaining % bankNote).toFixed(2));
      return acc;
    }, {});
  };
  const formatBankNotes = (amount, bankNote) =>
    `${amount} nota(s) de R$ ${bankNote.toFixed(2).replace(".", ",")}`;

  const value = Number(lines[0]);
  const bankNotesAmount = countMoney(value, bankNotes);
  const mapBankNotes = bankNotes
    .map((bankNote) => formatBankNotes(bankNotesAmount[bankNote], bankNote))
    .join("\n");
  const formatAnswer = (value) => `${value}\n${mapBankNotes}`;

  console.log(formatAnswer(value));
};

evaluateAll(resolution, samples);
