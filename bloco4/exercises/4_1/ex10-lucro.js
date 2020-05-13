let custo = 100;
let imposto = 20;
let custoComImposto = custo - ((custo * imposto) / 100);
let valorVenda = 150;
let vendasEfetuadas = 1000;

let lucro = (valorVenda - custoComImposto) * vendasEfetuadas;

console.log (lucro);