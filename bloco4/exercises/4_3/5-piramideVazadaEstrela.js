

let n = 7;
n = n/2;


//for 1 - Qual linha estamos
for (let y = 0; y < n; y += 1) {
  //for 2 - quantos espaços serão colocados por linha
  
  for (let z = n; z > y ; z -= 1) {
    process.stdout.write(" ");
  }
  // for 3 - quantos Ps serao colocados na linha
 
    process.stdout.write("p");

    let t = 0
  //Espaço do meio, precisa crescer ao passo que o espço de fora diminui
  if (y > 0) {
    for (t = 0 ; t < y * 2 ; t += 1) {
        process.stdout.write(' ');
    }
  }
      
    // Fecha lado direito do triangulo com "a"
    if (y > 0){
        process.stdout.write("a");
    }
    
  // Aqui quando o for 1 pula linha
  process.stdout.write("\n");
}
for (let base = 0; base < n * 2; base += 1){
    process.stdout.write('U');
}
