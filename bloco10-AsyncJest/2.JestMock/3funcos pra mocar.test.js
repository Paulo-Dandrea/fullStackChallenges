// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.
const pratica = require('./pratica');
const { strToUpper, concat2 } = require('./pratica');

jest.mock('./pratica');

test('should return with upperCase', () => {
  strToUpper.mockImplementation((str) => str.toLowerCase());

  expect(pratica.strToUpper('Asa')).toBe('asa');
  expect(pratica.strToUpper).toHaveBeenCalledTimes(1);

  pratica.firstLetter.mockImplementation((str) => str.charAt(str.length - 1));
  expect(pratica.firstLetter('Paulo')).toBe('o');
  expect(pratica.firstLetter).toHaveBeenCalledTimes(1);

  expect(concat2).toHaveBeenCalledTimes(0);
  concat2.mockImplementation((str1, str2, str3) => str1.concat(str2, str3));
  expect(concat2('a', 'b', 'c')).toBe('abc');
  expect(concat2).toHaveBeenCalledTimes(1);
});
