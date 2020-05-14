let n = 16;
n = n/2

//for 1 - Qual linha estamos
for (let y = 0; y < n; y += 1) {
  //for 2 - quantos espaços serão colocados por linha
  for (let z = n; z > y; z -= 1) {
    process.stdout.write(" ");
  }
  // for 3 - quantos Ps serao colocados na linha
  for (let x = 0; x <= y ; x += 1) {
    process.stdout.write("p");
  }

  //Espaço do meio, precisa crescer ao passo que o espço de cima diminui
    for (let t = 0 ; t < y ; t ++) {
        process.stdout.write(' ');
    }
    

  // for 4 - quantos As serao colocados na linha, eles inicializam uma linha depois
  for (let p = 1; p <= y; p += 1) {
    process.stdout.write("a");
  }

  // Aqui quando o for 1 pula linha
  process.stdout.write("\n");
}

