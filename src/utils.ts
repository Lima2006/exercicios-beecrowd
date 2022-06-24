/**
 * Create a custom spy console
 * @returns {{logs: String[], log: (...data:any) => void}}
 */

type ConsoleType = (...entries: string[]) => void;
type createCustomConsoleType = () => { log: ConsoleType; logs: string[] };
const createCustomConsole: createCustomConsoleType = () => {
  const logs: string[] = [];
  const log = (...entries: string[]) => logs.push(entries.join(" "));
  return { log, logs };
};

/**
 * Compare output with answer
 * @param {String[]} output
 * @param {String[]} answer
 * @returns {Boolean}
 */
type isCorrectType = (output: string[], input: string[]) => boolean;
const isCorrect: isCorrectType = (output, answer) =>
  output.join("\n") === answer.join("\n");

/**
 * Evaluate the result by passing the input to the resolution and comparing the answer with the output
 * @param {(lines: String[], console: (...data: any[]) => void)} resolution
 * @param {{input: String[], output: String[]}} sample
 * @returns {{status: String, input: String, output: String[], answer: String[]}}
 */
type sampleType = { input: string; output: string[] };
type evaluateSingleType = (
  resolution: (
    lines: string[],
    console: { log: ConsoleType; logs: string[] }
  ) => void,
  sample: sampleType
) => { status: string; input: string; output: string[]; answer: string[] };
const evaluateSingle: evaluateSingleType = (resolution, sample) => {
  const lines = sample.input.split("\n");
  const customConsole = createCustomConsole();
  resolution(lines, customConsole);
  const answer = customConsole.logs;
  const status = isCorrect(sample.output, answer) ? "CORRECT" : "FAIL";
  return { status, input: sample.input, output: sample.output, answer };
};

type evaluateAllType = (
  resolution: (
    lines: string[],
    console: { log: ConsoleType; logs: string[] }
  ) => void,
  samples: sampleType[]
) => void;
const evaluateAll: evaluateAllType = (resolution, samples) => {
  return console.table(
    samples.map((sample: sampleType) => evaluateSingle(resolution, sample))
  );
};

// Beecrowd table transformer

type adaptBeecrowdTableTextToArrayType = (prop: string) => string[];
const adaptBeecrowdTableTextToArray: adaptBeecrowdTableTextToArrayType = (
  text
) => text.split("\r\n");

type groupInputsAndOutputsType = (prop: string[]) => string[][];
type grouperFunctionInitialState = {
  currentArray: string[];
  result: string[][];
};
const groupInputsAndOutputs: groupInputsAndOutputsType = (input) => {
  const initialState: grouperFunctionInitialState = {
    currentArray: [],
    result: [],
  };
  return input.reduce((acc: grouperFunctionInitialState, item: string) => {
    if (item) {
      acc.currentArray.push(item);
    } else {
      acc.result.push(acc.currentArray);
      acc.currentArray = [];
    }
    return acc;
  }, initialState).result;
};

type sortInputAndOutputType = (param: string[][]) => sampleType[];
const sortInputAndOutput: sortInputAndOutputType = (input) => {
  const samples: sampleType[] = [];
  const copyInput = input.slice();
  while (copyInput.length > 0) {
    samples.push({
      input: copyInput.shift()?.join("\n") + "\n",
      output: [copyInput.shift()?.join("\n") || ""],
    });
  }

  return samples;
};

type transformTextToSmplesType = (prop: string) => sampleType[];
const transformTextToSmples: transformTextToSmplesType = (text) => {
  return sortInputAndOutput(
    groupInputsAndOutputs(adaptBeecrowdTableTextToArray(text))
  );
};

module.exports = {
  createCustomConsole,
  isCorrect,
  evaluateSingle,
  evaluateAll,
  transformTextToSmples,
};
