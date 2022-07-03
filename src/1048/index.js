const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const { transformTextToSamples, evaluateAll } = require("../utils");

const samples = transformTextToSamples(input);

const resolution = (lines, console) => {
  const adaptInput = (input) => input.filter(Boolean).map(Number);
  const classifySalary = ({ salary, readjustmentsTable }) =>
    readjustmentsTable.find((condition) => condition.condition(salary));
  const addSalaryReadjustment = ({ salary, salaryClassification }) =>
    (salaryClassification.readjustment / 100) * salary;
  const processSalary = ({ salary, salariesData }) => {
    const salaryClassification = classifySalary({
      salary,
      readjustmentsTable: salariesData,
    });
    const readjustment = addSalaryReadjustment({
      salary,
      salaryClassification,
    });
    const newSalary = salary + readjustment;
    const percentage = salaryClassification.readjustment;
    return { newSalary, readjustment, percentage };
  };
  const formatAnswer = ({ newSalary, readjustment, percentage }) =>
    `Novo salario: ${newSalary.toFixed(
      2
    )}\nReajuste ganho: ${readjustment.toFixed(
      2
    )}\nEm percentual: ${percentage} %`;

  const salariesClassificationsAndReadjustments = [
    {
      condition: (salary) => salary <= 400,
      readjustment: 15,
    },
    {
      condition: (salary) => salary > 400 && salary <= 800,
      readjustment: 12,
    },
    {
      condition: (salary) => salary > 800 && salary <= 1200,
      readjustment: 10,
    },
    {
      condition: (salary) => salary > 1200 && salary <= 2000,
      readjustment: 7,
    },
    {
      condition: (salary) => salary > 2000,
      readjustment: 4,
    },
  ];
  const totalSalary = adaptInput(lines)[0];
  const answer = processSalary({
    salary: totalSalary,
    salariesData: salariesClassificationsAndReadjustments,
  });

  console.log(formatAnswer(answer));
};

evaluateAll(resolution, samples);
