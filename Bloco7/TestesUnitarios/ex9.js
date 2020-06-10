// 9. Utilize assert.ok() para testar uma condição

const assert = require('assert');

function change(param) {
  return !param;
}

// implemente seus testes aqui

// console.log(change(1));
// console.log(change('1'))
// console.log(change('um'))
// console.log(change(null))

// assert.ok(change(null), true);
assert.equal(change('qualquer coisa voltaria: '), false);
assert.ok(change('qualquer coisa voltara falso, mas ok checka se é true'));
