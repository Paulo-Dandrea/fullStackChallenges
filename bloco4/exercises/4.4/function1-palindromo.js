// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false, se não for.

// Exemplo de palíndromo: arara.

// verificaPalindrome("arara");

// Retorno esperado: true

// verificaPalindrome("desenvolvimento");

// Retorno esperado: false


function verificaPalindrome(palavra){
    
    let reversed = '';

    for(let i = palavra.length - 1; i >= 0; i--){
        reversed += palavra[i];
    }

    // let reversed = palavra.split("").reverse().join("");
    console.log (reversed + " = " + palavra + ". È palindromo? ")
    console.log(palavra === reversed);

}

verificaPalindrome("arara");
verificaPalindrome('desenvolvimento');

