let input = require("fs").readFileSync("stdin", "utf8");
// Armazenar em um unico vetor. Separar por espaços => (" ") . Separar por quebra de Linhas ("\n").
let linhas = input.split(" ");

//Armazena valores em variaveis separadas e determina tipo.
const [a, b] = linhas.map(item => parseInt(item)); // Destructuring array para pegar

console.log(linhas);
console.log(b, a);