
const calcs = require('./calcs')
const array = require('./array')
const ex1 = require('./8.3 exs with Jest./ex1')
const { sum2, myIndexOfs, mySum, myRemove, myRemoveWithoutCopy, myFizzBuzz, thereIs, thereIsFunction, obj1, obj2, obj3, isAbove } = require('./8.3 exs with Jest./ex1')
// const { describe } = require('yargs')
// const { italic } = require('chalk')
// const { describe } = require('yargs')
// const { describe } = require('yargs')
// const { describe } = require('yargs')
// const { italic } = require('chalk')

describe('Suíte de Testes', () => {

  test('soma 1 e 2 para dar 3', () => {
     expect(calcs.sum(1, 2)).toEqual(3)
  })

  test('divide 10 por 3 para dar 3.33...', () => {
     expect(calcs.division(10, 3)).toBeCloseTo(3.33)
  })

  test('retorna apenas os pares no array', () => {
     let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
     let array2 = [2, 4, 6, 8, 10]
     expect(array.retornePares(array1)).toEqual(array2)
  })

  test('to contain', () => {
    let arraycont = ['item1', 'item2', 'item3']
    expect(array.addItem4(arraycont)).toContain('item4')
  })

  
  test('3 mais 3', () => {
      let valor = 3 + 3
      expect(valor).toBeGreaterThan(5) ///maior que 5
      expect(valor).toBeGreaterThanOrEqual(6) ///maior ou igual a 6
      expect(valor).toBeLessThan(8) ///menor que 8
      expect(valor).toBeLessThanOrEqual(7) ///menor ou igual a 7
      expect(valor).not.toEqual(5) ///não igual a 5
    })

})

describe('Sum function', () => {

   test('soma 1 e 2 para dar 3', () => {
      expect(calcs.sum(1, 2)).toEqual(3)
   })
 
   test('divide 10 por 3 para dar 3.33...', () => {
      expect(calcs.division(10, 3)).toBeCloseTo(3.33)
   })
 
   test('retorna apenas os pares no array', () => {
      let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      let array2 = [2, 4, 6, 8, 10]
      expect(array.retornePares(array1)).toEqual(array2)
   })
 
   test('to contain', () => {
     let arraycont = ['item1', 'item2', 'item3']
     expect(array.addItem4(arraycont)).toContain('item4')
   })
 
   
   test('3 mais 3', () => {
       let valor = 3 + 3
       expect(valor).toBeGreaterThan(5) ///maior que 5
       expect(valor).toBeGreaterThanOrEqual(6) ///maior ou igual a 6
       expect(valor).toBeLessThan(8) ///menor que 8
       expect(valor).toBeLessThanOrEqual(7) ///menor ou igual a 7
       expect(valor).not.toEqual(5) ///não igual a 5
     })
 
 })

 describe('Sum function', () => {

   test('soma 1 e 2 para dar 3', () => {
      expect(calcs.sum(1, 2)).toEqual(3)
   })
 
   test('divide 10 por 3 para dar 3.33...', () => {
      expect(calcs.division(10, 3)).toBeCloseTo(3.33)
   })
 
   test('retorna apenas os pares no array', () => {
      let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      let array2 = [2, 4, 6, 8, 10]
      expect(array.retornePares(array1)).toEqual(array2)
   })
 
   test('to contain', () => {
     let arraycont = ['item1', 'item2', 'item3']
     expect(array.addItem4(arraycont)).toContain('item4')
   })
 
   
   test('3 mais 3', () => {
       let valor = 3 + 3
       expect(valor).toBeGreaterThan(5) ///maior que 5
       expect(valor).toBeGreaterThanOrEqual(6) ///maior ou igual a 6
       expect(valor).toBeLessThan(8) ///menor que 8
       expect(valor).toBeLessThanOrEqual(7) ///menor ou igual a 7
       expect(valor).not.toEqual(5) ///não igual a 5
     })
 
 })

 describe('function sum2 at ex1.js ', () => { 
    test('4 mais 5 deve retornar 9', () => {
       expect(sum2(4, 5)).toBe(9)
    })  

    it('should throws an error with no called with numbers', () => {
      expect(() => {
         sum2(2,'4');
      }).toThrow(/parameters must be numbers/)
    })

    it('0 + 0 should return 0', () => {
       expect(sum2(0,0)).toBe(0);
    })

 })
//  describe()


 describe('function myIndexOfs at ex1.js ', () => { 

   it('should return the index of choosen value within a given array', () => {
      expect(myIndexOfs([1, 2, 3, 4], 3)).toBe(2);
   })
   it('should return -1 if the item given is not within array', () => {
      expect(myIndexOfs([1,2,3,4], 5)).toBe(-1);
   });
    
 })

 describe('function mySum at ex1.js ', () => { 

   test('returns 10 with [1, 2, 3, 4] given', () => {
      expect(mySum([1, 2, 3, 4])).toBe(10);
   })

   test('returns 0 with [1, -2, -3, 4] given', () => {
      expect(mySum([1, -2, -3, 4])).toBe(0);
   });
    
 })

 describe('function myRemove at ex1.js ', () => { 

   it('should return [1,2,4] when given [1,2,3,4]', () => {
      expect(myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4]);
   })

   test('returns 0 with [1, -2, -3, 4] given', () => {
      expect(mySum([1, -2, -3, 4])).toBe(0);
   });
    
 })

 describe('function myRemoveWithoutCopy at ex1.js ', () => { 

   it('it expected [1,2,4]', () => {
      expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1,2,4]);
   })

   it('should not be equal to [1, 2, 3, 4] ', () => {
      expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
   }) 

   it('When 5 is took out of a [1,2,3,4] array should return exactly as', () => {
      expect(myRemoveWithoutCopy([1,2,3,4], 5)).toEqual([1,2,3,4]);
   })
 })

 describe('function myFizzBuzz at ex1.js ', () => { 

   it('3 should return fizz ', () => {
      expect(myFizzBuzz(3)).toBe('fizz');
   })

   it('5 should return buzz', () => {
      expect(myFizzBuzz(5)).toBe('buzz');
   }) 

   it('14 should return 14', () => {
      expect(myFizzBuzz(14)).toBe(14);
   }) 

   it('string should return falsy', () => {
      expect(myFizzBuzz('alô, bebê')).toBeFalsy;
   }) 
 })

 it('thereIS variable should be declares', () => {
    expect(thereIs).toBeDefined;
 })

 it('thereIsFunction should be declared', () => {
    expect(typeof(thereIsFunction)).toBe('function');
 })

 it('objects should have same properties', () => {
    expect(obj1).toMatchObject(obj2);
    expect(obj1).not.toMatchObject(obj3);
 })

 it('isAbove should return truthy', () => {
    expect(isAbove(3,2)).toBeTruthy();
 })

 
