const pratica = require('./pratica');
const { strToUpper } = require('./pratica');

// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.
test('should return a mocked lowerCase, then, comes back to original toUpperCase function', () => {
  const toLowerCaseSpy = jest.spyOn(pratica, 'strToUpper');

  toLowerCaseSpy.mockImplementation((str) => str.toLowerCase());

  expect(toLowerCaseSpy('Asa')).toBe('asa');

  expect(toLowerCaseSpy).toHaveBeenCalledTimes(1);

  toLowerCaseSpy.mockRestore();

  expect(pratica.strToUpper('Asa')).toBe('ASA');

  expect(toLowerCaseSpy).toHaveBeenCalledTimes(0);
});
