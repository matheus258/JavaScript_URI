let input = require("fs").readFileSync("stdin", "utf8");
// Armazenar em um unico vetor.
let linhas = input.split(" ");

//Armazena valores em variaveis separadas e determina tipo.
const [a, b] = linhas.map(item => parseInt(item)); // Destructuring array para pegar

console.log(linhas);
console.log(b, a);