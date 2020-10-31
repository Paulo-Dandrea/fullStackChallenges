// simple aggregation, we need to use match and project
db.listingAndReviews.aggregate([
  { $match: { amenities: "Wifi" } },
  { $project: { price: 1, address: 1, _id: 0 } },
]);
// group by country. It is very similar to SQL "group by"
db.listingsAndReviews.aggregate([
  { $project: { address: 1, _id: 0 } },
  { $group: { _id: "$address.country" } },
]);
// Take the sum of repeated countries
db.listingsAndReviews.aggregate([
  { $project: { address: 1, _id: 0 } },
  { $group: { _id: "$address.country", count: { $sum: 1 } } },
]);
//
//
// Group by one key and count specific that key into group
db.superheroes.aggregate(
  { $match: { alignment: "good" } },
  {
    $group: {
      _id: "$race",
      total: { $sum: "$race" },
    },
  },
);

db.transactions.aggregate([
  {
    $match: {
      value: {
        $gt: 700,
        $lt: 6000,
      },
      to: "Lisa Simpson",
    },
  },
]);

db.transactions.aggregate([
  {
    $match: {
      value: {
        $gt: 1000,
      },
    },
  },
  { $limit: 5 },
]);

db.orders.aggregate([
  {
    lookup: {
      from: "warehouses",
      let: { order_item: "$item", order_qty: "$ordered" }, // o let vem da collection 'principal', no caso, o -orders-
      pipeline: [
        {
          match: {
            expr: {
              and: [
                { $eq: ["$stock_item", "$$order_item"] }, // aqui, como quando juntávamos uma table com a outra, especificamos que o nome do order_item($item, por isso que tem 2 $$) é o mesmo que o stock_item (que é o nome do field que vem do warehouse)
                { $gte: ["$instock", "$$order_qty"] }, // tem que ter mais no warehouse do que a quantidade comprada
              ],
            },
          },
        },
        { $project: { stock_item: 0, _id: 0 } },
      ],
      as: "stockdata",
    },
  },
]);

// Cada produto vai voltar assim:

// {
//   "_id" : 1,
//   "item" : "almonds",
//   "price" : 12,
//   "ordered" : 2,
//   "stockdata" : [
//     {
//       "warehouse" : "A",
//       "instock" : 120
//     },
//     {
//       "warehouse" : "B",
//       "instock" : 60
//     }
//   ]
// }

// Tinham dois estoques de amêndoas na Warehouse, então, volta como "stockdata" um Array. Essa é a função 'set & pipeline'

// fixação.
db.transactions.aggregate([
  {
    $lookup: {
      from: "clients",
      localField: "from",
      foreignField: "name",
      as: "client",
    },
  },
  {
    $unwind: "$client", // só para tirar de dentro do array, neste caso
  },
]);
// Pipeline com match
db.orders.aggregate([
  {
    lookup: {
      from: "warehouses",
      let: { order_item: "$item", order_qty: "$ordered" },
      pipeline: [
        {
          match: {
            expr: {
              and: [
                { $eq: ["$stock_item", "$$order_item"] }, // o nome do item em uma table é o mesmo da outra table
                { $gte: ["$instock", "$$order_qty"] },
              ],
            },
          },
        },
        { $project: { stock_item: 0, _id: 0 } },
      ],
      as: "stockdata",
    },
  },
]);

// let pipeline fixation
// Selecione todos os clientes com as suas respectivas transações feitas;
db.transactions.aggregate([
  {
    $lookup: {
      from: "clients",
      let: { nameFrom: "$from" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$$nameFrom", "$name"],
            },
          },
        },
        { $project: { _id: 0 } },
      ],
      as: "profile",
    },
  },
]);

// Selecione quatro clientes com as suas respectivas transações recebidas;

db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      let: { name: "$name" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$$name", "$to"],
            },
          },
        },
        { $project: { _id: 0 } },
      ],
      as: "receivedFrom",
    },
  },
  { $project: { _id: 0 } },
  { $limit: 4 },
]);

// Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.

db.clients.aggregate([
  {
    $match: {
      State: "Florida",
    },
  },
  {
    $lookup: {
      from: "transactions",
      let: { name: "$name" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$$name", "$to"],
            },
          },
        },
        {
          $project: {
            _id: 0,
          },
        },
      ],
      as: "esseCaraDeFloridaRecebeu",
    },
  },
  {
    $project: { _id: 0 },
  },
]);

// Grouping by times specific name made a transaction
db.transactions.aggregate([
  {
    $group: {
      _id: "$from",
      transferiu: {
        $sum: 1
      }
    }  
  }
  ])

  // Sum the values that client transfered

  db.transactions.aggregate([
    {
      $group: {
        _id: "$from",
        totalTransferedAmount: {
          $sum: "$value"
        },
        timesUserMadeTransaction: {
          $sum: 1
        }
      }  
    }
    ])

// Now, just project client that the totalTransfered was less then 2000

db.transactions.aggregate([
  {
    $group: {
      _id: "$from",
      totalTransferedAmount: {
        $sum: "$value"
      },
      timesUserMadeTransaction: {
        $sum: 1
      }
    }  
  },
  {
    $match: {
      totalTransferedAmount: {$lt: 2000}
    }
  }
  ])

// total de todas transacoes feitas e seus valores
  db.transactions.aggregate([
    {
      $group: {
        _id: null,
        valorTotalDeTransacoes: {
          $sum: "$value"
        },
        transacoesFeitas: {
          $sum: 1
        }
      }  
    },
    {$project: {_id:0}}
    ])

// total de transações feitas por cada banco

db.transactions.aggregate([
  {
    $group: {
      _id: "$bank",
      valorTotalDeTransacoes: {
        $sum: "$value"
      },
      transacoesFeitas: {
        $sum: 1
      }
    }  
  },
  ])

  // mesmo agrupamento, só mostrando bancos com valores de transacao maiores que 3000
  

  db.transactions.aggregate([
    {
      $group: {
        _id: "$bank",
        valorTotalDeTransacoes: {
          $sum: "$value"
        },
        transacoesFeitas: {
          $sum: 1
        }
      }  
    }, 
    {
      $match: {
        valorTotalDeTransacoes: {$gt: 3000}
      }
    }
    ])


// exercises

//Exercício 1: Utilizando o estágio $match, escreva uma agregação para retornar somente os clientes do sexo "MASCULINO".

db.clientes.aggregate([
  { $match: { sexo: "MASCULINO" } },
  { $project: { sexo: 1 } },
])[
  //Exercício 2: Utilizando o estágio $match, escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005.
  {
    $match: {
      sexo: "FEMININO",
      dataNascimento: {
        $gt: ISODate("1995"),
        $lt: ISODate("2005"),
      },
    },
  }
][
  //Exercício 3: Utilizando o estágio $match, escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005, limitando a quantidade de documentos retornados em 5.
  ({
    $match: {
      sexo: "FEMININO",
      dataNascimento: {
        $gt: ISODate("1995"),
        $lt: ISODate("2005"),
      },
    },
  },
  { $limit: 5 })
][
  //Exercício 4: Conte quantos clientes do estado SC existem na coleção. Retorne um documento em que o campo _id contenha a UF e outro campo com o total.

  ({
    $match: {
      "endereco.uf": "SC",
    },
  },
  {
    $group: {
      _id: "$endereco.uf",
      SCdocs: {
        $sum: 1,
      },
    },
  })
][
  //Exercício 5: Agrupe os clientes por sexo. Retorne o total de clientes de cada sexo no campo total.
  {
    $group: {
      _id: "$sexo",
      totalDeClientesPorSexo: {
        $sum: 1,
      },
    },
  }
][
  //Exercício 6: Agrupe os clientes por sexo e uf. Retorne o total de clientes de cada sexo no campo total.
  {
    $group: {
      _id: { sexo: "$sexo", UF: "$endereco.uf" },
      quantosPorSexoNesteEstado: {
        $sum: 1,
      },
    },
  }
][
  //Exercício 7: Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os documentos de saída, de forma que se pareçam com o documento a seguir (não se importe com a ordem dos campos):
  //Copiar
  //{
  //  "estado": "SP",
  //  "sexo": "MASCULINO",
  //  "total": 100
  //}

  ({
    $group: {
      _id: { x: "$sexo", UF: "$endereco.uf" },
      total: {
        $sum: 1,
      },
    },
  },
  {
    $project: {
      sexo: "$_id.x",
      uf: "$_id.UF",
      _id: 0,
    },
  })
][
  //Exercício 8: Descubra quais são os 5 clientes que gastaram o maior valor.

  ({
    $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "cliente",
    },
  },
  {
    $sort: {
      valorTotal: -1,
    },
  },
  {
    $unwind: {
      path: "$cliente",
    },
  },
  {
    $project: {
      nome: "$cliente.nome",
      valorTotal: 1,
      _id: 0,
    },
  },
  { $limit: 5 })
];

//Exercício 9: Descubra quais são os 10 clientes que gastaram o maior valor no ano de 2019.
[
  {
    $match: {
      dataVenda: {
        $gte: ISODate("2019-01-01"),
        $lte: ISODate("2019-12-31"),
      },
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
    $sort: {
      valorTotal: -1,
    },
  },
  {
    $unwind: {
      path: "$cliente",
    },
  },
  {
    $project: {
      nome: "$cliente.nome",
      valorTotal: 1,
      _id: 0,
    },
  },
  { $limit: 10 },
];

//Exercício 10: Descubra quantos clientes compraram mais de 5 vezes. Retorne um documento que contenha somente o campo clientes com o total de clientes.
//Dica: O operador $count pode simplificar sua query.

[
  {
    $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "cliente",
    },
  },
  {
    $group: {
      _id: "$cliente",
      compras: {
        $sum: 1,
      },
    },
  },
  {
    $match: {
      compras: {
        $gt: 5,
      },
    },
  },
  { $count: "Clientes que compraram mais de 5 vezes" },
];

//Exercício 11: Descubra quantos clientes compraram menos de três vezes entre os meses de Janeiro de 2020 e Março de 2020.

[
  {
    $match: {
      dataVenda: {
        $gt: ISODate("2020-01-01"),
        $lt: ISODate("2020-03-31"),
      },
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
    $group: {
      _id: "$cliente",
      compras: {
        $sum: 1,
      },
    },
  },
  {
    $match: {
      compras: {
        $lt: 3,
      },
    },
  },
  { $count: "Clientes que compraram mais de 3 vezes" },
];
//Exercício 12: Descubra quais as três ufs que mais compraram no ano de 2020. Retorne os documentos no seguinte formato:
//Copiar
//{
//  "totalVendas": 10,
//  "uf": "SP"
//}

[
  {
    $match: {
      dataVenda: {
        $gt: ISODate("2020-01-01"),
        $lt: ISODate("2020-03-31"),
      },
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
    $group: {
      _id: "$cliente.endereco.uf",
      totalVendas: {
        $sum: 1,
      },
    },
  },
  {
    $unwind: {
      path: "$_id",
    },
  },
  {
    $project: {
      totalVendas: 1,
      uf: "$_id",
      _id: 0,
    },
  },
][
  //Exercício 13: Encontre qual foi o total de vendas e a média de vendas de cada uf no ano de 2019. Ordene os resultados pelo nome da uf. Retorne os documentos no seguinte formato:
  //Copiar
  //{
  //  "_id": "MG",
  //  "mediaVendas": 9407.129225352113,
  //  "totalVendas": 142
  //}

  ({
    $match: {
      dataVenda: {
        $gt: ISODate("2020-01-01"),
        $lt: ISODate("2020-03-31"),
      },
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
    $group: {
      _id: "$cliente.endereco.uf",
      totalVendas: {
        $sum: 1,
      },
      mediaVendas: {
        $avg: "$valorTotal",
      },
    },
  },
  {
    $unwind: {
      path: "$_id",
    },
  },
  {
    $project: {
      totalVendas: 1,
      uf: "$_id",
      _id: 0,
      mediaVendas: 1,
    },
  })
];
