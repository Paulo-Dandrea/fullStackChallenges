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

// Exercício 3: Remova os estágios $count e $match do exercício anterior e adicione um estágio no pipeline que coloque as compras do cliente no campo compras.

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
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "carrinho de compras",
    },
  },
];

// Exercício 4: Selecione TODOS os clientes que compraram entre Junho de 2019 e Março de 2020.

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
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "carrinho de compras",
    },
  },
  {
    $match: {
      "carrinho de compras.dataVenda": {
        $gte: ISODate("2019-06-01"),
        $lte: ISODate("2020-03-30"),
      },
    },
  },
];

// Exercício 6: Deixe apenas os top 10 clientes com mais compras nesse período.

// https://stackoverflow.com/questions/9040161/mongo-order-by-length-of-array
// Is not possible to sort by array's length, but you could add a field and sort by it

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
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "carrinho de compras",
    },
  },
  {
    $match: {
      "carrinho de compras.dataVenda": {
        $gte: ISODate("2019-06-01"),
        $lte: ISODate("2020-03-30"),
      },
    },
  },
  {
    $addFields: {
      numeroDeCompras: {
        $subtract: [{ $size: "$carrinho de compras" }, 1],
      },
    },
  },
  {
    $sort: {
      numeroDeCompras: -1,
    },
  },
  { $limit: 10 },
];

// Exercício 7: Para esses clientes, adicione um campo chamado compras.valorComDesconto em todas as compras do período, aplicando 10% de desconto sobre o valor total da compra (valorTotal).
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
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "compras",
    },
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate("2019-06-01"),
        $lte: ISODate("2020-03-30"),
      },
    },
  },
  {
    $addFields: {
      numeroDeCompras: {
        $subtract: [{ $size: "$compras" }, 1],
      },
    },
  },
  {
    $sort: {
      numeroDeCompras: -1,
    },
  },
  { $limit: 10 },
  {
    $unwind: {
      path: "$compras",
    },
  },
  {
    $addFields: {
      "compras.valorComDesconto": {
        $subtract: [
          "$compras.valorTotal",
          { $multiply: ["$compras.valorTotal", 0.1] },
        ],
      },
    },
  },
];

// Exercício 8: Ainda nesse pipeline, descubra os 5 estados com mais compras.
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
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "compras",
    },
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate("2019-06-01"),
        $lte: ISODate("2020-03-30"),
      },
    },
  },
  {
    $addFields: {
      numeroDeCompras: {
        $subtract: [{ $size: "$compras" }, 1],
      },
    },
  },
  {
    $sort: {
      numeroDeCompras: -1,
    },
  },
  { $limit: 10 },
  {
    $unwind: {
      path: "$compras",
    },
  },
  {
    $addFields: {
      "compras.valorComDesconto": {
        $subtract: [
          "$compras.valorTotal",
          { $multiply: ["$compras.valorTotal", 0.1] },
        ],
      },
    },
  },
  {
    $group: {
      _id: "$endereco.uf",
      uf: {
        $sum: "$numeroDeCompras",
      },
    },
  },
  {
    $sort: {
      uf: -1,
    },
  },
  { $limit: 5 },
];


// Exercício 9: Descubra o cliente que mais consumiu QUEIJO PRATO. Retorne um documento com a seguinte estrutura:

// {
//   "nomeCliente": "NOME",
//   "uf": "UF DO CLIENTE",
//   "totalConsumido": 100
// }

[
  {
    $unwind: {
      path: "$itens",
    },
  },
  {
    $match: {
      "itens.nome": "QUEIJO PRATO",
    },
  },
  {
    $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "cliente",
    },
  },
  {
    $unwind: {
      path: "$cliente",
    },
  },
  {
    $group: {
      _id: "$cliente.nome",
      totalConsumido: {
        $sum: "$itens.quantidade",
      },
    },
  },
  {
    $project: {
      _id: 0,
      nomeCliente: "$_id",
      totalConsumido: 1,
      uf: "$cliente.endereco.uf",
    },
  },
  {
    $lookup: {
      from: "clientes",
      localField: "nomeCliente",
      foreignField: "nome",
      as: "cliente",
    },
  },
  {
    $unwind: {
      path: "$cliente",
    },
  },
  {
    $project: {
      totalConsumido: 1,
      nomeCliente: 1,
      uf: "$cliente.endereco.uf",
    },
  },
  {
    $sort: {
      totalConsumido: -1,
    },
  },
  { $limit: 1 },
];

// Exercício 10: Selecione todas as vendas do mês de Março de 2020, com status EM SEPARACAO. Acrescente um campo chamado dataEntregaPrevista com valor igual a três dias após a data da venda. Retorne apenas os campos clienteId, dataVenda e dataEntregaPrevista.

[
  {
    $match: {
      dataVenda: {
        $gte: ISODate("2020-03-01"),
        $lte: ISODate("2020-03-30"),
      },
      status: "EM SEPARACAO",
    },
  },
  {
    $addFields: {
      dataEntregaPrevista: {
        $add: ["$dataVenda", 3 * 24 * 60 * 60000],
      },
    },
  },
  {
    $project: {
      clienteId: 1,
      dataVenda: 1,
      dataEntregaPrevista: 1,
      _id: 0,
    },
  },
];