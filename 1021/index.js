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
  const bankNotes = [100, 50, 20, 10, 5, 2];
  const coins = [1, 0.5, 0.25, 0.1, 0.05, 0.01];
  const bankNotesAndCoins = [...bankNotes, ...coins];
  const inputToNumber = (input) => input.filter(Boolean).map(Number);
  const calcBankNotesandCoins = (input, bankNotes) => {
    let remaining = input;
    return bankNotes.reduce((acc, val) => {
      acc[val] = Math.floor(remaining / val);
      remaining = Number((remaining % val).toFixed(2));
      return acc;
    }, {});
  };
  const formatBankNotes = (amount, value) =>
    `${amount} nota(s) de R$ ${value.toFixed(2)}`;
  const formatCoins = (amount, value) =>
    `${amount} moeda(s) de R$ ${value.toFixed(2)}`;

  const value = inputToNumber(lines)[0];
  const sortedBankNotesAndCoins = calcBankNotesandCoins(
    value,
    bankNotesAndCoins
  );
  bankNotesMap = bankNotes
    .map((bankNote) =>
      formatBankNotes(sortedBankNotesAndCoins[bankNote], bankNote)
    )
    .join("\n");
  coinsMap = coins
    .map((coin) => formatCoins(sortedBankNotesAndCoins[coin], coin))
    .join("\n");
  const formattedAnswer = `NOTAS:\n${bankNotesMap}\nMOEDAS:\n${coinsMap}`;
  console.log(formattedAnswer);
};

evaluateAll(resolution, samples)
