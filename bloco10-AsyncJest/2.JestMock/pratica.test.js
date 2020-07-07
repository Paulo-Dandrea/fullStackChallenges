const pratica = require('./pratica');
let { randomNumber } = require('./pratica');

// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

it('mock should return 10', () => {
  pratica.randomNumber = jest.fn().mockReturnValue(10);

  expect(pratica.randomNumber).toHaveBeenCalledTimes(0);

  pratica.randomNumber();
  expect(pratica.randomNumber).toHaveBeenCalled();

  expect(pratica.randomNumber).toHaveBeenCalledTimes(1);

  expect(pratica.randomNumber()).toBe(10);

  expect(pratica.randomNumber).toHaveBeenCalledTimes(2);
});

// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

it('should return the division of two parameters', () => {
  const mockDivision = jest
    .spyOn(pratica, 'randomNumber')
    .mockImplementation((a, b) => a / b);

  mockDivision(4, 1);
  expect(mockDivision).toHaveBeenCalled();
  expect(mockDivision).toHaveBeenCalledTimes(3);
  expect(mockDivision(15, 5)).toBe(3);
  expect(mockDivision).toHaveBeenCalledTimes(4);
});

// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

it('should return the division of two parameters', () => {
    randomNumber = jest.fn()
    .mockImplementation((a, b, c) => a * b * c);
  
    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber(2, 2, 2)).toBe(8);
    expect(randomNumber).toHaveBeenCalledTimes(2);

    randomNumber.mockClear();
    expect(randomNumber).not.toHaveBeenCalled();

    randomNumber = jest.fn()
    .mockImplementation((a) => a * 2);
    expect(randomNumber(2)).toBe(4);
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });

 