const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

/* const countMoney = (value) => {
  let remaining = value
  const banknote = {oneHundred: 0, fifty: 0, twenty: 0, ten: 0, five: 0, two: 0, one: 0}
  banknote.oneHundred = Math.floor(remaining / 100)
  remaining = remaining % 100

  banknote.fifty = Math.floor(remaining / 50)
  remaining = remaining % 50

  banknote.twenty = Math.floor(remaining / 20)
  remaining = remaining % 20

  banknote.ten = Math.floor(remaining / 10)
  remaining = remaining % 10

  banknote.five = Math.floor(remaining / 5)
  remaining = remaining % 5

  banknote.two = Math.floor(remaining / 2)
  remaining = remaining % 2

  banknote.one = remaining

  return banknote
} */

const countMoney = (value) => {
  const banknote = [100, 50, 20, 10, 5, 2, 1];
  const result = Array(banknote.length);
  let remaining = value;
  for (let n in banknote) {
    result[n] = Math.floor(remaining / banknote[n]);
    remaining = remaining % banknote[n];
  }
  return result;
};
const formattedAnswer = (total, hundred, fifty, twenty, ten, five, two, one) =>
  `${total}\n${hundred} nota(s) de R$ 100,00\n${fifty} nota(s) de R$ 50,00\n${twenty} nota(s) de R$ 20,00\n${ten} nota(s) de R$ 10,00\n${five} nota(s) de R$ 5,00\n${two} nota(s) de R$ 2,00\n${one} nota(s) de R$ 1,00`;
const presentAswer = (answer) => console.log(formattedAnswer(...answer));

const answer = [Number(lines[0]), ...countMoney(Number(lines[0]))];

presentAswer(answer);
