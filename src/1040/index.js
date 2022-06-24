const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const splitGradesAndNumber = () => {
  let grades = lines[0].split(" ");
  for (let i in grades) {
    grades[i] = Math.round(parseFloat(grades[i]) * 10) / 10;
  }
  return grades;
};
const grades = {
  main: splitGradesAndNumber(),
  load: [2, 3, 4, 1],
  exam: parseFloat(lines[1]),
};

const calcAverageGrade = (grade, load) => {
  let result = 0;
  grade.forEach((val, i) => result = Math.round((result + val * load[i]) * 10) / 10);
  return result / load.reduce((oldValue, newValue) => oldValue + newValue, 0);
};
const calcExamValues = (averageGrade, examGrade) => {
  const finalGrade = calcAverageGrade([averageGrade, examGrade], [1, 1]);
  let result = "";
  if (finalGrade >= 5.0) {
    result = "aprovado";
  } else if (finalGrade < 5.0) {
    result = "reprovado";
  }
  return { finalGrade: finalGrade, result: result };
};
const isApproved = (averageGrade) => {
  if (averageGrade >= 7.0) return "aprovado";
  if (averageGrade < 7.0 && averageGrade >= 5.0) return "em exame";
  if (averageGrade < 5.0) return "reprovado";
};
const calcStudentData = (grades) => {
  const averageGrade = calcAverageGrade(grades.main, grades.load);
  const examValues = calcExamValues(averageGrade, grades.exam);
  const result = {
    averageGrade: averageGrade,
    initialStatus: isApproved(averageGrade),
  };
  if (result.initialStatus === "em exame") {
    result.examGrade = grades.exam;
    result.finalStatus = examValues.result;
    result.finalGrade = examValues.finalGrade;
  }
  return result;
};
const formattedAnswer = (answer) => {
  if (answer.initialStatus === "em exame") {
    return `Media: ${answer.averageGrade.toFixed(1)}\nAluno ${
      answer.initialStatus
    }.\nNota do exame: ${answer.examGrade.toFixed(1)}\nAluno ${
      answer.finalStatus
    }.\nMedia final: ${answer.finalGrade.toFixed(1)}`;
  }
  return `Media: ${answer.averageGrade.toFixed(1)}\nAluno ${
    answer.initialStatus
  }.`;
};
const presentAnswer = (answer) => console.log(formattedAnswer(answer));

const answer = calcStudentData(grades);

presentAnswer(answer);

/* const grades = lines[0].split(" ");
const grade = {
  exam: lines[1],
  grades: [
    Number(grades[0]),
    Number(grades[1]),
    Number(grades[2]),
    Number(grades[3]),
  ],
};
const load = [2, 3, 4, 1];

const calcAverageGrade = (grades, load) => {
  let averageGrade = 0;
  for (let i in grades) {
    averageGrade =
      Math.round(
        (averageGrade +
          (grades[i] * load[i]) /
            load.reduce((oldValue, newValue) => oldValue + newValue, 0)) *
          10
      ) / 10;
  }
  return averageGrade;
};
const isTheStudentApproved = (averageGrade, examGrade) => {
  if (averageGrade >= 7.0) return "approved";
  else if (averageGrade >= 5.0 && averageGrade < 7.0) {
    const finalGrade = calcAverageGrade([averageGrade, examGrade], [1, 1]);
    const finalSituation = (grade) => {
      if (grade >= 5.0) return "approved";
      else if (grade < 5.0) return "reproved";
    };
    return {
      situation: "exam",
      examGrade: examGrade,
      finalSituation: finalSituation(finalGrade),
      finalGrade: finalGrade,
    };
  } else if (averageGrade < 5.0) return ("reproved");
};
const formattedAnswer = (averageGrade, situation) => {
  if (typeof situation === "object" && situation.situation === "exam")
    return (`Media: ${averageGrade.toFixed(1)}\nAluno em exame.\nNota do exame: ${
      situation.examGrade.toFixed(1)
    }\nAluno ${
      situation.finalSituation === "approved" ? "aprovado" : "reprovado"
    }.\nMedia final: ${situation.finalGrade.toFixed(1)}`);
  else if (situation === "approved" || situation === "reproved")
    return (`Media: ${averageGrade.toFixed(1)}\nAluno ${
      situation === "approved" ? "aprovado" : "reprovado"
    }.`);
};
const presentAnswer = (answer) => console.log(formattedAnswer(...answer));

const averageGrade = calcAverageGrade(grade.grades, load);
const answer = [
  averageGrade,
  isTheStudentApproved(averageGrade, Number(grade.exam)),
];

presentAnswer(answer);

O meu erro no código abaixo foi esquecer de colocar o valor inicial no método reduce()
 */