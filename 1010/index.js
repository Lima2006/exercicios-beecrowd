const filePath = require("path").resolve(__dirname, "./stdin.txt");
const input = require("fs").readFileSync(filePath, "utf8");
const lines = input.split("\n");

const [a, b] = [lines[0].split(" "), lines[1].split(" ")];

for (let i = 0; i < a.length; i++) {
  a[i] = Number(a[i]);
}

for (let i = 0; i < b.length; i++) {
  b[i] = Number(b[i]);
}

function total([aQua, aVal], [bQua, bVal]) {
  const aTot = aQua * aVal;
  const bTot = bQua * bVal;
  const result = aTot + bTot;
  return `R$ ${result.toFixed(2)}`;
}

console.log(`VALOR A PAGAR: ${total(a.slice(1, 3), b.slice(1, 3))}`);
