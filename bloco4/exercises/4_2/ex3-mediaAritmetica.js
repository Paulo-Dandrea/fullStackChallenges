let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let somaDosArrays = 0

for (let i = 0 ; i < numbers.length ; i ++) {
    somaDosArrays = somaDosArrays + numbers[i];
}

let resultado = somaDosArrays / numbers.length;

console.log ( resultado );

