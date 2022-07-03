const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const { evaluateAll, transformTextToSamples } = require("../utils");

const samples = transformTextToSamples(input);

const dddList = {
  61: "Brasilia",
  71: "Salvador",
  11: "Sao Paulo",
  21: "Rio de Janeiro",
  32: "Juiz de Fora",
  19: "Campinas",
  27: "Vitoria",
  31: "Belo Horizonte",
};

const resolution = (lines, console) => {
  const adaptInput = (input) => Number(input[0]);
  const findDDD = ({ ddd, dddList }) => dddList[ddd] || "DDD nao cadastrado";

  const dddNumber = adaptInput(lines);

  const answer = findDDD({ ddd: dddNumber, dddList });

  console.log(answer);
};

evaluateAll(resolution, samples);
