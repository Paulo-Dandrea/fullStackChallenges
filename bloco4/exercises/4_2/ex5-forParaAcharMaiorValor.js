let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;



let maiorNumero = numbers[0];




for (let i = 1 ; i < numbers.length ; i ++) {
    
    if ( maiorNumero < numbers [ i ] ) {
        maiorNumero = numbers[i];
    }
  
}


console.log ( maiorNumero );




// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;