const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const { evaluateAll } = require("../utils.js");

const samples = [
  {
    input: "576.73\n",
    output: [
      "NOTAS:\n5 nota(s) de R$ 100.00\n1 nota(s) de R$ 50.00\n1 nota(s) de R$ 20.00\n0 nota(s) de R$ 10.00\n1 nota(s) de R$ 5.00\n0 nota(s) de R$ 2.00\nMOEDAS:\n1 moeda(s) de R$ 1.00\n1 moeda(s) de R$ 0.50\n0 moeda(s) de R$ 0.25\n2 moeda(s) de R$ 0.10\n0 moeda(s) de R$ 0.05\n3 moeda(s) de R$ 0.01",
    ],
  },
  {
    input: "4.00\n",
    output: [
      "NOTAS:\n0 nota(s) de R$ 100.00\n0 nota(s) de R$ 50.00\n0 nota(s) de R$ 20.00\n0 nota(s) de R$ 10.00\n0 nota(s) de R$ 5.00\n2 nota(s) de R$ 2.00\nMOEDAS:\n0 moeda(s) de R$ 1.00\n0 moeda(s) de R$ 0.50\n0 moeda(s) de R$ 0.25\n0 moeda(s) de R$ 0.10\n0 moeda(s) de R$ 0.05\n0 moeda(s) de R$ 0.01",
    ],
  },
  {
    input: "91.01\n",
    output: [
      "NOTAS:\n0 nota(s) de R$ 100.00\n1 nota(s) de R$ 50.00\n2 nota(s) de R$ 20.00\n0 nota(s) de R$ 10.00\n0 nota(s) de R$ 5.00\n0 nota(s) de R$ 2.00\nMOEDAS:\n1 moeda(s) de R$ 1.00\n0 moeda(s) de R$ 0.50\n0 moeda(s) de R$ 0.25\n0 moeda(s) de R$ 0.10\n0 moeda(s) de R$ 0.05\n1 moeda(s) de R$ 0.01",
    ],
  },
];

const resolution = (lines, console) => {
  const bankNotesAndCoins = [
    100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01,
  ];
  const inputToNumber = (input) => input.filter(Boolean).map(Number);
  const calcBankNotes = (input, bankNotes) => {
    let remaing = input;
    return bankNotes.reduce((acc, val) => {
      acc[val] = parseInt(Math.floor(remaing / val));
      remaing = Math.round((remaing % val) * 100) / 100;
      return acc;
    }, {});
  };

  const formatAnswer = (bankNote) =>
    `NOTAS:\n${bankNote[100]} nota(s) de R$ 100.00\n${bankNote[50]} nota(s) de R$ 50.00\n${bankNote[20]} nota(s) de R$ 20.00\n${bankNote[10]} nota(s) de R$ 10.00\n${bankNote[5]} nota(s) de R$ 5.00\n${bankNote[2]} nota(s) de R$ 2.00\nMOEDAS:\n${bankNote[1]} moeda(s) de R$ 1.00\n${bankNote[0.5]} moeda(s) de R$ 0.50\n${bankNote[0.25]} moeda(s) de R$ 0.25\n${bankNote[0.1]} moeda(s) de R$ 0.10\n${bankNote[0.05]} moeda(s) de R$ 0.05\n${bankNote[0.01]} moeda(s) de R$ 0.01`;

  const value = inputToNumber(lines)[0];
  const answer = calcBankNotes(value, bankNotesAndCoins);
  console.log(formatAnswer(answer));
};

console.table(evaluateAll(resolution, samples));
