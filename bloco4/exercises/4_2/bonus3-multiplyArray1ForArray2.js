let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersmultiplicacaodos = [];


for (let i = 0; i < numbers.length ; i++) {

    if ( i < numbers.length -1) {
        
        multiplicacaoDoDaFrenteComDeTras = numbers[i] * numbers[i+1]; 
        numbersmultiplicacaodos.push(multiplicacaoDoDaFrenteComDeTras)

    } else { 
        multiplicacaoDoDaFrenteComDeTras = numbers[i] * 2;
        numbersmultiplicacaodos.push(multiplicacaoDoDaFrenteComDeTras)
    

 }
}

  console.log (numbersmultiplicacaodos);


