const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

type gameDurationType = (params: { start: number; end: number }) => number;

const resolution = (lines: string[], console: Console) => {
  const splitNumbersBySpace = (input: string) => input.split(" ").map(Number);

  const gameDuration: gameDurationType = ({ start, end }) => {
    const isOtherDay = (end - start) < 0;
    if (isOtherDay) {
      return end + 24 - start;
    }
    const isFullDay = end - start === 0;
    if (isFullDay) {
      return 24;
    }
    return end - start;
  };
  const formattedAnswer = (input: string | number) =>
    `O JOGO DUROU ${input} HORA(S)`;

  const baseValues = splitNumbersBySpace(lines[0]);
  const answer = gameDuration({ start: baseValues[0], end: baseValues[1] });

  console.log(formattedAnswer(answer));
};

resolution(lines, console);

