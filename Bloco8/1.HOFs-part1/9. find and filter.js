const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expected_result = 'O Senhor dos Anéis';



// Função que retorna true para o filtro
const filterDots = (char) => char === '.';

function authorWith3DotsOnName() { 


  let targetBook = books.find ((book) => {
    //transformando o nome do autor em um array por caracteres
    let splitedNameToFilterDots = book.author.name.split(''); 
    //Armazenar um array com a quantidade de pontos
    numberOfDots = splitedNameToFilterDots.filter(filterDots);
    console.log (numberOfDots)
    return numberOfDots.length >= 3 // retorna true pro find dizendo que aqui tem 3 pontos    
  })

  return (
    'Livro que o nome do Autor tem 3 pontos: ' + targetBook.name
  );
}

// assert.deepEqual(authorWith3DotsOnName(), expected_result);
console.log(authorWith3DotsOnName());
// authorWith3DotsOnName();
