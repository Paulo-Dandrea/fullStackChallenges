
function somaNumPrecedentes(n){
    sum = 0;
    for (let i=1; i <= n; i+= 1){
        sum += i;
    }
// a proposta seria usar return aqui, mas pus console.log pra facilitar visualização
    console.log(sum)
}

somaNumPrecedentes(5);