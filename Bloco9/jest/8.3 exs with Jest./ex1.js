// ANCHOR 1 sum


function sum2(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}


// assert.strictEqual(sum2(4,5),9);
// assert.strictEqual(sum2(0,0),0)

// assert.throws(() => { sum2(4,'5'); }, `Error: parameters must be numbers`); // OK


// ANCHOR 2 - myIndexOF


function myIndexOfs(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}


// console.log(myIndexOfs([1, 2, 3, 4], 3))
// assert.equal(myIndexOfs([1, 2, 3, 4], 3), 2);
// assert.equal(myIndexOfs([1, 2, 3, 4], 5),-1);


// ANCHOR 3 - mySUm

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}


// assert.strictEqual(mySum([1, 2, 3, 4]), 10);

// assert.strictEqual(mySum([1, -2, -3, 4]), 0);



// ANCHOR 4 - myRemove
function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3),[1,2,4]);
// assert.notDeepEqual(myRemove([1, 2, 3, 4], 3),[1, 2, 3, 4])

// assert.deepEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4] )




// ANCHOR 5 - myRemoveWithoutCopy
function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1,2,4])
// assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4])
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4]), [1, 2, 3, 4])
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4])

// console.log(myRemoveWithoutCopy([1, 2, 3, 4]));



// ANCHOR 6 - myFizzBuzz
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// assert.strictEqual(myFizzBuzz(3), 'fizz');
// assert.strictEqual(myFizzBuzz(5), 'buzz');
// assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
// assert.strictEqual(myFizzBuzz(14), 14);
// assert.strictEqual(myFizzBuzz('alô, bebê'), false);




// ANCHOR 7 - TESTE SE UMA VARIAVEL FOI DEFINIDA
let thereIs = '';

// implemente seus testes aqui

// console.log(typeof(thereIs))

// assert.strictEqual(typeof(thereIs), 'string')
// assert.notStrictEqual(typeof(thereIs), 'undefined');



// ANCHOR 8. Teste se uma função foi definida - thereIs()


function thereIsFunction() {}

// implemente seus testes aqui

// assert.strictEqual(typeof(thereIs), 'function')


// Compare dois objetos (JSON) para verificar se são idênticos ou não

// ANCHOR 10 


const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
// assert.deepEqual(obj1, obj2);
// assert.deepEqual(obj1, obj3);


// Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.

// ANCOR 11. isAbove()
function isAbove(num1, num2) {
  return num1 > num2;
}

// implemente seus testes aqui
// assert.ok(isAbove(5,4));
// assert.ok(isAbove(4,7)); // expected: error


module.exports = {
  sum2,
  myIndexOfs,
  mySum,
  myRemove,
  myRemoveWithoutCopy,
  myFizzBuzz,  
  thereIsFunction,
  thereIs,
  obj1,
  obj2,
  obj3,
  isAbove
 }
