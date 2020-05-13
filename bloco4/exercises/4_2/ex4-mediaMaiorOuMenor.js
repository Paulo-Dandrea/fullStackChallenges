let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Com o mesmo código do exercício anterior, caso valor final seja maior que 20, 
//imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

let somaDosArrays = 0

for (let i = 0 ; i < numbers.length ; i ++) {
    somaDosArrays = somaDosArrays + numbers[i];
}

let resultado = somaDosArrays / numbers.length;

if ( resultado > 20 ) {
    console.log ('Valor maior que 20: ');
} else if ( resultado < 20 ) {
    console.log ('Valor menor que 20: ');
}


console.log ( resultado );

