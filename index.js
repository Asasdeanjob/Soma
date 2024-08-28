const prompt = require('prompt-sync');
const input = prompt();

var quantSoma = input('Quantos valores serão somados: ');
let soma = 0;
for (var i = 1; i <= quantSoma; i++) {
  var num = input('Digite o valor: ');
  soma += parseInt(num);
}
console.log('A soma dos valores é: ' + soma);