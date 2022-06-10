const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const resolution = (lines, console) => {
  const splitNumbersBySpace = (input) => input.split(" ").map(Number);

  const gameDuration = ([start, end]) => {
    const isOtherDay = end - start < 0;
    if (isOtherDay) {
      return end + 24 - start;
    }
    const isFullDay = end - start === 0;
    if (isFullDay) {
      return 24;
    }
    return end - start;
  };
  const formattedAnswer = (input) => `O JOGO DUROU ${input} HORA(S)`;

  const baseValues = splitNumbersBySpace(lines[0]);
  const answer = gameDuration(baseValues);

  console.log(formattedAnswer(answer));
};

resolution(lines, console);
