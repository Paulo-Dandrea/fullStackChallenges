db.students.updateOne(
  {},
  {
    $push: {
      servicoDeBordo: {
        $each: [
          { categoria: "comida", item: "frango com curry", quantidade: 50 },
          { categoria: "bebida", item: "suco de tomate", quantidade: 1 },
          { categoria: "sobremesa", item: "quindim", quantidade: 1 },
          { categoria: "bebida", item: "água", quantidade: 1 },
        ],
        $sort: { item: 1, quantidade: 1 },
      },
    },
  },
  { collation: { locale: "pt" } },
);

db.students.updateOne(
  {},
  {
    $pull: {
      servicoDeBordo: { item: "frango com curry" },
    },
  },
);

db.students.updateOne(
  {},
  {
    $pull: {
      servicoDeBordo: {
        item: {
          $in: ["suco de tomate", "quindim"],
        },
      },
    },
  },
);

db.recipes.updateMany( // Passamos de updateOne para updateMany.
  {}, // Retiramos a restrição do título.
  { $set : {
    "ingredients.$[elemento].unit": "xícara", // Setamos `unit` como "xícara",
    "ingredients.$[elemento].name": "Farinha Integral"// `name` como "Farinha Integral".
    }
  }, 
  { arrayFilters: [ { "elemento.name": "Farinha" } ]} // Filtramos os arrays que o valor da propriedade `name` seja "Farinha".
)

db.collection.update(
  { <query selector> },
  { <update operator>: { "array.$[<identifier>].field" : value } },
  { arrayFilters: [ { <identifier>: <condition> } } ] }
)

{/* {/* Exercício 1: Adicione a categoria "superhero" ao filme Batman.
Após a execução do método .find().pretty(), o resultado do filme Batman será parecido com o dessa imagem: */}

 db.movies.updateMany(
   {},
   {
     $push: {
       category: 'superhero'
     }
   }
   )

{/* 
Exercício 2: Utilizando o modificador $each, adicione as categorias "villain" e "comic-based" ao filme Batman.
Após a execução do método .find().pretty(), o resultado do filme Batman será parecido com o dessa imagem: */}

db.movies.updateOne(
  {title: 'Batman'},
  {
    $push: {
      category: {
        $each: [
          'villain', 'comic based'
          ]
      }
    }
  }
  )

{/* Exercício 3: Remova a categoria "action" do filme Batman.
Após a execução do método .find().pretty(), o resultado do filme Batman será parecido com o dessa imagem: */}

db.movies.updateOne(
  {title: 'Batman'},
  {
    $pull: {
      category: 'action' 
      }
  }
  )

 {/* Exercício 4: Remova o primeiro elemento do array category do filme Batman. */} 
 db.movies.updateOne(
  {title: 'Batman'},
  {
    $pop: {
      category: -1
    }
  }
  )


{/* Exercício 5: Remova o último elemento do array category do filme Batman.
Após a execução do método .find().pretty(), o resultado do filme Batman será parecido com o dessa imagem: */}


{/* l Image */}
{/* Exercício 6: Adicione o elemento "action" ao array category do filme Batman, garantindo que esse valor não se duplique. */}
{/* Após a execução do método .find().pretty() o resultado do filme Batman será parecido com o dessa imagem: */}


{/* Exercício 7: Adicione a categoria "90's" aos filmes Batman e Home Alone.
Após a execução do método .find().pretty(), o resultado do filme Batman e do filme Home Alone será parecido com o dessa imagem: */}



{/* Exercício 8: Crie um array de documentos chamado cast para o filme Home Alone com os seguintes dados: */}
Copiar
{
  "actor": "Macaulay Culkin",
  "character": "Kevin"
},
{
  "actor": "Joe Pesci",
  "character": "Harry"
},
{
  "actor": "Daniel Stern"
}
{/* Após a execução do método .find().pretty(), o resultado do filme Home Alone será parecido com o dessa imagem:
Shell Image */}


Exercício 9: Adicione o campo character com o valor Marv ao array de cast em que o campo actor seja igual a Daniel Stern no filme Home Alone.
Dica: Para isso, leia aqui sobre o operador $.
Após a execução do método .find().pretty(), o resultado do filme Home Alone será parecido com o dessa imagem:
Shell Image
Exercício 10: Crie um array de documentos chamado cast para o filme Batman com os seguintes dados:
Copiar
{
  "character": "Batman"
},
{
  "character": "Alfred"
},
{
  "character": "Coringa"
}
Após a execução do método .find().pretty(), o resultado do filme Batman será parecido com o dessa imagem:
Shell Image
Exercício 11: Produza três querys para o filme Batman:
Adicione o campo actor, que deve ser um array com o valor Christian Bale, ao array de cast em que o campo character seja igual a Batman;
Adicione o campo actor, que deve ser um array com o valor Michael Caine, ao array de cast em que o campo character seja igual a Alfred;
Adicione o campo actor, que deve ser um array com o valor Heath Ledger, ao array de cast em que o campo character seja igual a Coringa.
Dica: Para isso, leia aqui sobre o operador $.
Após a execução do método .find().pretty() o resultado do filme Batman será parecido com o dessa imagem:
Shell Image
Exercício 12: Adicione aos atores de cast do character Batman do filme Batman os valores "Michael Keaton", "Val Kilmer" e "George Clooney", e deixe o array em ordem alfabética.
Dica: Para isso, leia aqui sobre o operador $.
Após a execução do método .find().pretty(), o resultado do filme Batman será parecido com o dessa imagem:
Shell Image */}