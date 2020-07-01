const uppercase = (str, funcCB) => {
  funcCB(str.toUpperCase());
  }

test('should return a str with upper case', (done) => {
    const callback = data => {
      expect(data).toBe('PAULO');
      done();
    }
    uppercase('paulo', callback);
});

//   Escreva um teste que verifique a chamada do callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

// it('teste callback uppercase', (done) => {
//   uppercase('teste', (callback) => {
//     expect(callback).toBe('TESTE');
//     done();
//   });
// });