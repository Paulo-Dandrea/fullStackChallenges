// acaba passando por q não tá esperando acabar o timeout
// test("Não deveria passar!", () => {
//     setTimeout(() => {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!')
//     }, 500);
//   });

  // aqui testa corretamente por que espera o callback ser chamado

// test("Não deveria passar!", (done) => {
//     setTimeout(() => {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!')
//       done();
//     }, 500);
//   });

// 

// const SumNumbers = (a, b, callback) => {
//     setTimeout(() => {
//       const result = a + b;
//       callback(result);
//     }, 500)
//   }
  
//   test('Testando SumNumbers, soma 5 mais 10', done => {
//     SumNumbers(5, 10, (result) => {
//       expect(result).toBe(15);
//       done();
//     });
//   })


const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalsByType = (type) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const arrayAnimals = Animals.filter((animal) => animal.type === type);
        if (arrayAnimals.length !== 0) {
          return resolve(arrayAnimals);
        }
  
        return reject({ error: 'Não possui esse tipo de animal.' });
      }, 1000);
    })
  );
  
  const getListAnimals = (type) => (
    findAnimalsByType(type).then(list => list)
  );
  
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', () => {
      expect.assertions(2);
      return getListAnimals('Dog').then(listDogs => {
        expect(listDogs[0].name).toEqual('Dorminhoco');
        expect(listDogs[1].name).toEqual('Soneca');
      });
    });

    test('testando com async await', async () => {
        const listdogsAwais = await getListAnimals('Dog');
        expect(listdogsAwais[0].name).toEqual('Dorminhoco');
        expect(listdogsAwais[1].name).toEqual('Soneca'); 
    } )
  });