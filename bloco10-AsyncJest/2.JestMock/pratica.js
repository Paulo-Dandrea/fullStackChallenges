const randomNumber = () =>  Math.ceil(Math.random() * 100);

// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

const strToUpper = str => str.toUpperCase();
const firstLetter = str => str.charAt(0);
const concat2 = (str1, str2) => str1.concat(str2);

console.log(strToUpper('adad'))
console.log(firstLetter('adad'))
console.log(concat2('adad', 'hahahaha'))

module.exports = { randomNumber, strToUpper, firstLetter, concat2 };

