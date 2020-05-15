
function verificaFimPalavra(word, itEndsWith, endLenghtToMeasure){
    
    if (word.length < itEndsWith.length)  {
        return ('O fim não pode ser maior que a palavra pra ser comparada, tente novamente');
    }else if (endLenghtToMeasure === undefined){    
        return ('É necessário digitar o números de letras para contar de trás para frente, tente novamente')
    } else {
        let isEndEqual = false;
        for (let i=1; i <= endLenghtToMeasure; i+= 1){
            isEndEqual = false;
            if(word[word.length-i] === itEndsWith[itEndsWith.length -i]){
                isEndEqual = true;
            }
        }
        return isEndEqual
    }
    
}

console.log(verificaFimPalavra("joaofernando", "fernanaaaaaaaaaaa"));
console.log(verificaFimPalavra("trybe", "be"));

console.log(verificaFimPalavra("joaofernando", "fernan",2));
console.log(verificaFimPalavra("trybe", "be", 3));
console.log(verificaFimPalavra('trybe','be',2))

