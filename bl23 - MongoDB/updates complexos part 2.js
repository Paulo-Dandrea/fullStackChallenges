// university.mongodb.com, usando airbnb.listingAndReviews
db.listingsAndReviews.find(
  {
    $and: [
      { $expr: { $gt: ["$accommodates", 6] } },
      { reviews: { $size: 50 } },
    ],
  },
  { name: 1 },
);

// old way of arrayFIlters
db.movies.updateOne(
  { name: "Pink Floyd" },
  {
    $set: {
      "albums.$[elemento].duration": 81,
      "albums.$[elemento].awards": ["Grammy Hall of Fame Award"],
    },
  },
  { arrayFilters: [{ "elemento.title": "The Wall" }] },
);
// New way of arrayFilters
db.movies.updateOne(
  { "name": "Pink Floyd", "albums.title": "The Dark Side of Moon" },
  {
    $set: {
      "albums.$.duration": 42,
      "albums.$.awards": ["Grammy Hall of Fame Award", "NME Award"],
    },
  },
);
//  $elemMatch é para procurar e fazer comparação com elementos dentro de um subdocumento
db.artists.find(
  {
    albums: {
      $elemMatch: {
        duration: { $gte: 35, $lt: 60 },
        awards: { $all: ["Grammy Hall of Fame Award"] },
      },
    },
  },
  { name: true },
);

// $expr for find comparison

db.movies.find({ $expr: { $gt: ["$listeners.us", "$listeners.uk"] } });

// $mod é para calcular o resto

db.movies.find({ totalAlbums: { $mod: [3, 0] } }); // vai trazer os documentos em que o totalAlbums sejam multiplos de 3

// $regex
db.movies.find({ description: { $regex: /English rock band/ } });

db.movies.find({ description: { $regex: /pink floyd were/i } });

db.movies.find(
  {description: {$regex: /influential rock groups in history.$/i}}
  ) // put the dollar sign where you want the regex to be ended

  // description like "Pink Floyd were%"
db.artists.find({ description: { $regex: /^Pink Floyd were/ } }, { name: true }); // quando usa o chapéu, tem que começar exatamente com a próxima palavra

// Creating indexes for later search
db.movies.createIndex({description: "text"})
// $search for one word
db.movies.find({$text: {$search: "influential"}})
// searching for more than one word
db.movies.find({$text: {$search: "influential successful neo-progessive"}})
// buscando por uma frase
db.artists.count({ $text: { $search: "\"became a leading band of the progressive rock genre\"" } });

// t4 lectured copied below
db.bandasBrasileiras.insertOne({
  name: 'Mutantes',
  description: 'Os Mutantes é uma banda brasileira de rock psicodélico formada durante o Movimento Tropicalista no ano de 1966, em São Paulo, por Arnaldo Baptista, Rita Lee e Sérgio Dias. Também participaram do grupo Liminha e Dinho Leme.'
});

// criando índice na língua portuguesa
db.bandasBrasileiras.createIndex({ description: "text" }, { default_language: "portuguese" })

db.bandasBrasileiras.find(
  { $text: { $search: "é uma banda" }},
  { score: { $meta: "textScore" } }
);

db.bandasBrasileiras.find(
  { $text: { $search: "foi uma banda" }},
  { score: { $meta: "textScore" } }
);

// listando índices
db.bandasBrasileiras.getIndexes()

// removendo índice
db.bandasBrasileiras.dropIndex('description_text');
// to know the active indexes
db.movies.getIndexes()

// 1 Utilizando o operador $all, retorne todos os filmes que contenham action e adventure no array category.
db.movies.find(
  {category: {$all : ['action', 'adventure']}},
  )
// 2 Agora retorne os filmes que contenham action no array category e possuem nota do IMDB maior do que 7.
db.movies.find(
  {
    $and: 
    [
      {category: {$all : ['action']}}, {imdbRating: {$gt: 7}}
    ]  
  }
  )
// 3 Adicione um array chamado ratings ao filme Batman com os seguintes valores: [85, 100, 102, 105]. Dica: lembre-se do operador $each visto no dia anterior.
db.movies.updateOne(
  {title: "Batman"},
  {
    $push: {
      ratings: {
        $each: [85,100,102,105]
      }
    }
  }
)
// 4 Adicione um array chamado ratings ao filme Godzilla com os seguintes valores: [78, 52, 95, 102].
db.movies.updateOne(
  {title: "Godzilla"},
  {
    $push: {
      ratings: {
        $each: [78, 52, 95, 102]
      }
    }
  }
  )
// 5 Adicione um array chamado ratings ao filme Home Alone com os seguintes valores: [200, 99, 65].
db.movies.updateOne(
  {title: "Home Alone"},
  {
    $push: {
      ratings: {
        $each: [200,99,65]
      }
    }
  }
  )
// 6 Retorne todos os filmes com ratings maior do que 103, exibindo apenas os campos title e ratings.
db.movies.find(
  {
    ratings: {
      $gt: 103
    }
  },
  {
    title: 1,
    ratings: 1
  }
  )
// 7 Retorne todos os filmes com ratings entre 100 e 105, exibindo apenas os campos title e ratings.
db.movies.find(
  {
    ratings: {
      $elemMatch: {
        $gt: 100, $lt: 105
      }
    }
  }
  )
// 8 Retorne todos os filmes com ratings entre 64 e 105 e divisíveis por 9, exibindo apenas os campos title e ratings.
db.movies.find(
  {
    ratings: {
      $elemMatch: {
        $gt: 64, $lt: 105
      },
      $mod: [9, 0]
    }
  },
  {
    title: 1, ratings: 1
  }
  )
// 9 Retorne os filmes da categoria adventure e com ratings maior do que 103, exibindo apenas os campos title, ratings e category.
db.movies.find(
  {
    $and: [
      {
        category: {
          $all: ['adventure']
        }
      },
      {
        ratings: {
          $elemMatch: {
            $gt: 103
          }
        }
      }
      ]
  },
  {
    title: 1, ratings: 1, category: 1
  }
  )
  // 10 Retorne somente o título de todos os filmes com dois elementos no array category.
  db.movies.find(
    {
      category: {
        $size: 2
      }
    }
    )

// 11 Retorne somente o título de todos os filmes com quatro elementos no array ratings.
db.movies.find(
  {
    ratings: {
      $size: 4
    }
  }
  )
// 12 Busque os filmes em que o módulo 5 do campo budget seja 0 e que o array category tenha tamanho 2.
db.movies.find(
  {
    budget: {
      $mod: [5, 0]
    },
    category: {
      $size: 2
    }
  }
  )
// 13 Retorne os filmes da categoria "sci-fi" ou que possua o ratings maior do que 199, exibindo apenas os campos title, ratings e category.
db.movies.find(
  {
    $or: [
    {category: {
      $elemMatch: {
        $eq: "sci-fi"
      }
    }},
    {ratings: {
      $gt: 199
    }}
    ]
  }
  )
// 14 Retorne os filmes em que o ratings possua tamanho 4 e que seja da category "adventure" ou "family", mas que não tenha o imdbRating menor que 7.
db.movies.find(
  {
    ratings: {
      $size: 4
    },
    category: {
      $in: ["adventure", "family"]
    },
    imdbRating: {
      $not :{
        $lt: 7
      }
    }
  }
  )
// 15 Adicione o campo description no filme Batman com o seguinte valor: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.".
db.movies.updateOne(
  {
    title: "Batman"
  },
  {
    $set: {
      "description" : "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
    }
  }
  )
// 16 Adicione o campo description no filme Godzilla com o seguinte valor: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity.".
db.movies.updateOne(
  {
    title: "Godzilla"
  },
  {
    $set: {
      "description" : "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity."
    }
  }
  )
// 17 Adicione o campo description no filme Home Alone com o seguinte valor: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.".
db.movies.updateOne(
  {
    title: "Home Alone"
  },
  {
    $set: {
      "description" : "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."
    }
  }
  )
// 18 Utilizando o operador $regex, retorne todos os filmes em que a descrição comece com a palavra "The".
db.movies.find(
  {
    description: {
      $regex: /^the/i
    }
  }
  )
//  19 Utilizando o operador $regex, retorne todos os filmes em que a descrição termine com a palavra "humanity.".
db.movies.find(
  {
    description: {
      $regex: /humanity.$/i
    }
  }
  )
// 20 Crie um índice do tipo text no campo description.


// 21 Utilizando o operador $text, busque por filmes que contenham o termo "vacation".

// 22 Utilizando o operador $text, busque por filmes que contenham os termos "monstrous" e "criminal".

// 23 Utilizando o operador $text, busque por filmes que contenham a frase "when he is accidentally".
