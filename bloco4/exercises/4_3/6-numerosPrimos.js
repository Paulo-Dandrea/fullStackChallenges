// 6- Faça um programa que diz se um número definido numa variável é primo ou não.

// Um número primo é um número que só é divisível por 1 e por ele mesmo, 
// ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.

// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; 
// Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let isPrime = 7;
let contagem = 0;

for ( let i = 1 ; i < isPrime; i += 1) {
    
   if ( isPrime % i == 0) {
       contagem ++
   }

}

if ( contagem < 2) {
    process.stdout.write( isPrime + " é um número primo.");
} else {
    process.stdout.write( isPrime + " não é um número primo.");
}

