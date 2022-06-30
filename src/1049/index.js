const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const { transformTextToSmples, evaluateAll } = require("../utils");

const samples = transformTextToSmples(input);

const resolution = (lines, console) => {
  // Functions
  const adaptInput = (input) => input.filter(Boolean);

  const findOneAnimal = ({ input, animalScheme }) =>
    Object.keys(animalScheme).find((item) => item === input);

  const findAllAnimals = ({ input, animalScheme }) => {
    const foundKey = input.find((item) =>
      findOneAnimal({ input: item, animalScheme })
    );
    const updateValues = {
      input: input.filter((item) => item !== foundKey),
      animalScheme: animalScheme[foundKey],
    };
    if (typeof animalScheme !== "object" || Array.isArray(animalScheme))
      return animalScheme;
    return findAllAnimals(updateValues);
  };

  // Data

  const animalScheme = {
    vertebrado: {
      ave: { carnivoro: "aguia", onivoro: "pomba" },
      mamifero: { onivoro: "homem", herbivoro: "vaca" },
    },
    invertebrado: {
      inseto: { hematofago: "pulga", herbivoro: "lagarta" },
      anelideo: { hematofago: "sanguessuga", onivoro: "minhoca" },
    },
  };

  // Values

  const animalCharacteristics = adaptInput(lines);
  const answer = findAllAnimals({
    input: animalCharacteristics,
    animalScheme,
  });

  //

  console.log(answer);
};

evaluateAll(resolution, samples);
