// (Difícil) Faça um programa que receba uma string em algarismos romanos e 
// retorne o número que a string representa.
// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!

// Dicas:

// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:

// Copiar
// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |
// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados.
//  Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à 
// esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.



function romainToIndoArabianNumber(romainNum){

    let romainNumCapitalized = romainNum.toUpperCase()

    let romainNumbers = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 400,
        M : 1000
    }
    if(romainNumCapitalized.length === 1){
        return romainNumbers[romainNumCapitalized];
    } else if (romainNumCapitalized.length >= 3) {
        return(romainNumCapitalized)
    }
    
}
console.log(romainToIndoArabianNumber('iii'));