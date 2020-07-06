const service = require('./service');
let { randomNumber, isDivisible } = require('./service');

test("#randomRgbColor", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  service.randomRgbColor = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(service.randomRgbColor).toHaveBeenCalledTimes(0);

  expect(service.randomRgbColor()).toBe("first call");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(1);

  expect(service.randomRgbColor()).toBe("second call");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(2);

  expect(service.randomRgbColor()).toBe("default value");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(3);
});

// test('randomNumber returns something', () => {
//     randomNumber = jest
//     .fn()
//     .mockReturnValue(0)
//     .mockReturnValueOnce(5)
//     .mockReturnValueOnce(2);

//     expect(randomNumber).toHaveBeenCalledTimes(0);

    // expect(randomNumber()).toBe(5);
    // expect(isDivisible(randomNumber())).toBe(false);

//     expect(randomNumber).toHaveBeenCalledTimes(1);

//     // expect(randomNumber()).toBe(2);
//     // expect(isDivisible(3)).toBe(false);

//     // expect(randomNumber).toHaveBeenCalledTimes(2);

// });


//Simule (mocke) dois valores para a função randomNumber() retornar e um terceiro valor default. Chame a função isDivisible() quatro vezes num mesmo teste e cheque que os retornos são conforme esperado.