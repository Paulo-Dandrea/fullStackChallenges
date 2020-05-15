// Copiado da internet, refazer da própria cabeça :

//A ideia aqui é ir criando um objeto através do percurso de um array

var arrayTeste = [2, 3, 2, 5, 8, 2, 3];

function numMaisFrequente(array){
   let result,  // This is the value we will return
   best = -1,   // Initialize the comparison for greedy
   lookup = {}; // Hashmap for essentially constant lookup

   // Loop to go through array and count elements
   for(let i = 0; i < array.length; i++){ 
      
      if (lookup[array[i]] == undefined){
         lookup[array[i]] = 0;
      } 

      lookup[array[i]]++; // Increment count
      if(lookup[array[i]] > best){ // Greedy for best element
         best = lookup[array[i]];
         result = array[i]
      }
   }
   //will return most frequent item in array cats
   console.log(result);
   
}

numMaisFrequente(arrayTeste);                                       