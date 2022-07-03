const returnEvenNumbers = ({ start, end }) => {
  const evenNumbers = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) evenNumbers.push(i);
  }
  return evenNumbers;
};
const formatAnswer = ({ answer }) => answer.join("\n");

const answer = returnEvenNumbers({ start: 1, end: 100 });

console.log(formatAnswer({ answer }));
