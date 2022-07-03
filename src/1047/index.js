const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");
const { transformTextToSamples, evaluateAll } = require("../utils");

const samples = transformTextToSamples(input);

const resolution = (lines, console) => {
  const adaptInput = (input) => input.split(" ").map(Number);
  const convertHoursToMinutes = (hours) => hours * 60;
  const convertMinutesToHours = (minutesInput) => {
    const hours = parseInt(minutesInput / 60);
    const minutes = parseInt(minutesInput % 60);
    return { hours, minutes };
  };
  const transformTimeToMinutes = ({ hours, minutes }) => {
    const hoursInMinutes = convertHoursToMinutes(hours);
    return hoursInMinutes + minutes;
  };
  const calcGameTime = ({ start, end }) => {
    const sameDay = end - start > 0;
    const otherDay = end - start < 0;
    const oneDay = 24 * 60;
    if (sameDay) return end - start;
    if (otherDay) return oneDay + end - start;
    return oneDay;
  };
  const formatAnswer = ({ hours, minutes }) =>
    `O JOGO DUROU ${hours} HORA(S) E ${minutes} MINUTO(S)`;

  const [startHour, startMinute, endHour, endMinute] = adaptInput(lines[0]);
  const totalStartMinute = transformTimeToMinutes({
    hours: startHour,
    minutes: startMinute,
  });
  const totalEndMinute = transformTimeToMinutes({
    hours: endHour,
    minutes: endMinute,
  });
  const answer = convertMinutesToHours(
    calcGameTime({ start: totalStartMinute, end: totalEndMinute })
  );
  console.log(formatAnswer(answer));
};

evaluateAll(resolution, samples);
