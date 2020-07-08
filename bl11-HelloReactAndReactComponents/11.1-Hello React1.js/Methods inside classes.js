class Pen {
  constructor(point, color, ink = 100) {
    this.point = point;
    this.color = color;
    this.ink = ink;
  }

  loseInk(quant) {
    this.ink -= quant;
  }

  sign() {
    this.loseInk(10);
    return `'I've signed a text with a ${this.color} pen. charge: ${this.ink}%'`;
  }

  wroteText(str) {
    this.loseInk(str.length);
    return `${str}. Charge: ${this.ink} Color: ${this.color}`
  }
}


// A partir da classe acima, crie um método chamado wroteText, o qual recebe uma string como parâmetro, retornará o texto passado e diminuirá a tinta da caneta numa quantidade equivalente à quantidade de caracteres da string.

const myPen = new Pen (0.7, 'black');

console.log(myPen.sign()); // 'I've signed a text with a black pen. charge: 90%'

console.log(myPen.wroteText('Were going to have a lot of snowballs'));

const theirPen = new Pen (1, 'red');
console.log(theirPen.wroteText('people will love each other since day 9 of june - snowballs, love, snowballs, snowballs, snowballs, love, love, love, love'))

