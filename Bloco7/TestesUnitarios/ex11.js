// Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.

const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

// implemente seus testes aqui
assert.ok(isAbove(5,4));
assert.ok(isAbove(4,7)); // expected: error