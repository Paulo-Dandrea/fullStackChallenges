let a = Math.round(Math.random() * 100);
let b = Math.round(Math.random() * 100);
let c = Math.round(Math.random() * 100);

let varA = "da variável a, que é: " + a;
let varB = "da variável b, que é: " + b;
let varC = "da variável c, que é: " + c;

let maiorNumero;

if (a > b) {
  if (a > c) {
    maiorNumero = varA;
  } else {
    maiorNumero = varC;
  }
} else if (b > a) {
  if (b > c) {
    maiorNumero = varB;
  } else {
    maiorNumero = varC;
  }
}

console.log("O maior número é " + maiorNumero);
