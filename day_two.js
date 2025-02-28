const prompt = require('prompt-sync')();

let name = prompt('Qual o seu nome? ');
let age = prompt('Quantos anos você tem? ');
let language = prompt('Qual linguagem de programação você está estudando?');

console.log (`Olá ${name}, você tem ${age} anos e já está aprendendo ${language}!`);

console.log (`Você gosta de estudar ${language}?`);
let answer = prompt('Responda com "sim" ou "não": ');

if (answer === 'sim' || 's' || 'yes') {
  console.log('Muito bom! Continue estudando e você terá muito sucesso.');
}

if (answer == 'não' || 'nao' || 'n' || 'no') {
  console.log('Ahh que pena... Já tentou aprender outras linguagens?');
}