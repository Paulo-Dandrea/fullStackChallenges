// Exercício 1: Utilize uma combinação das expressões aritméticas e adicione um campo chamado idade à coleção clientes. Algumas dicas:
// arredonde para baixo o valor da idade;
// calcule a idade usando a diferença entre a data corrente e a data de nascimento;
// 1 dia é igual a 86400000 milissegundos.

[
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] },
          ],
        },
      },
    },
  },
];

// Exercício 2: Utilizando o novo campo idade, conte quantos clientes têm entre 18 e 25 anos.

[
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"] },
            { $multiply: [86400000, 365] },
          ],
        },
      },
    },
  },
  {
    $match: {
      idade: {
        $gte: 18,
        $lte: 25,
      },
    },
  },
  { $count: "pessoas com idade entre 18 e 25" },
];