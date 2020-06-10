// 7. Teste se uma variável foi definida

const assert = require('assert');

let thereIs = '';

// implemente seus testes aqui

// console.log(typeof(thereIs))

assert.strictEqual(typeof(thereIs), 'string')
assert.notStrictEqual(typeof(thereIs), 'undefined');