const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const firstInputToNumber = (input) => Number(input[0]);
const calcBankNotesAndCoins = (value) => {
  let remaining = value;
  const bankNotes = {
    hundred: 100,
    fifty: 50,
    twenty: 20,
    ten: 10,
    five: 5,
    two: 2,
  };
  const coins = {
    hundred: 1,
    fifty: 0.5,
    twentyFive: 0.25,
    ten: 0.1,
    five: 0.05,
    one: 0.01,
  };
  for (let i in bankNotes) {
    const bankNoteValue = bankNotes[i];
    bankNotes[i] = parseInt(remaining / bankNoteValue);
    remaining = Math.round((remaining % bankNoteValue) * 100) / 100;
  }
  for (let i in coins) {
    const coinValue = coins[i];
    coins[i] = parseInt(remaining / coinValue);
    remaining = Math.round((remaining % coinValue) * 100) / 100;
  }

  return [ bankNotes, coins ];
};
const formattedAnswer = ([ bankNotes, coins ]) =>
  `NOTAS:
${bankNotes.hundred} nota(s) de R$ 100.00
${bankNotes.fifty} nota(s) de R$ 50.00
${bankNotes.twenty} nota(s) de R$ 20.00
${bankNotes.ten} nota(s) de R$ 10.00
${bankNotes.five} nota(s) de R$ 5.00
${bankNotes.two} nota(s) de R$ 2.00
MOEDAS:
${coins.hundred} moeda(s) de R$ 1.00
${coins.fifty} moeda(s) de R$ 0.50
${coins.twentyFive} moeda(s) de R$ 0.25
${coins.ten} moeda(s) de R$ 0.10
${coins.five} moeda(s) de R$ 0.05
${coins.one} moeda(s) de R$ 0.01`;
const presentAnswer = (answer) => console.log(formattedAnswer(answer));

const answer = calcBankNotesAndCoins(firstInputToNumber(lines));

presentAnswer(answer);
