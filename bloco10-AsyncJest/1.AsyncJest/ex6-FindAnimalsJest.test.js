const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.find((animal) => animal.name === name);

      if (arrayAnimals) {
        return resolve(arrayAnimals);
      }

      return reject('Nenhum animal com esse nome!');
    }, 100);
  });

const getAnimal = (name) => {
  return findAnimalByName(name).then((animal) => animal);
};
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch((error) =>
        expect(error).toEqual('Nenhum animal com esse nome!'),
      );
    });
  });
});

// 6.2. Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.

const findAnimalByAge = (age) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const array = Animals.filter((animal) => animal.age === age);

      if (array.length !== 0) {
        return resolve(array);
      }

      return reject('nenhum animal com esta idade');
    }, 100);
  });

const getAnimalsByAge = (ano) => {
  return findAnimalByAge(ano).then((animal) => animal);
};

describe('Testando findAnimalsByAge', () => {
  describe('quando existe o animal com a idade', () => {
    it('should return an array of object', async () => {
      await expect(getAnimalsByAge(5)).resolves.toEqual([
        {
          name: 'Preguiça',
          age: 5,
          type: 'Cat',
        },
      ]);
    });

    it('should return an error when there\'s no animal with that age', async () => {
      await expect(getAnimalsByAge(11)).rejects.toBe('nenhum animal com esta idade');
    })
  });
});
