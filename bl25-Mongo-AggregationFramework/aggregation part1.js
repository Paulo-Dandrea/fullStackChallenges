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
                { $gte: ["$instock", "$$order_qty"] },// tem que ter mais no warehouse do que a quantidade comprada
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

{
  "_id" : 1,
  "item" : "almonds",
  "price" : 12,
  "ordered" : 2,
  "stockdata" : [
    {
      "warehouse" : "A",
      "instock" : 120
    },
    {
      "warehouse" : "B",
      "instock" : 60
    }
  ]
}

// Tinham dois estoques de amêndoas na Warehouse, então, volta como "stockdata" um Array. Essa é a função 'set & pipeline'

// fixação. 
db.transactions.aggregate([{$lookup: {
  from: 'clients',
  localField: 'from',
  foreignField: 'name',
  as: 'client'
}},
{
  $unwind: "$client" // só para tirar de dentro do array, neste caso
}
])