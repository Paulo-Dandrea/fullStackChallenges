// const connection = require('./connection');
// const { ObjectId } = require('mongodb');

// // Cria uma string com o nome completo do autor

// const getNewAuthor = (authorData) => {
//   const { id, firstName, middleName, lastName } = authorData;

//   const fullName = [firstName, middleName, lastName]
//     .filter((name) => name)
//     .join(' ');

//   return {
//     id,
//     firstName,
//     middleName,
//     lastName,
//     name: fullName,
//   };
// };

// const getAll = async () =>
//   connection()
//     .then((db) => db.collection('authors').find().toArray())
//     .then((authors) =>
//       authors.map(({ _id, firstName, middleName, lastName }) =>
//         getNewAuthor({
//           id: _id,
//           firstName,
//           middleName,
//           lastName,
//         }),
//       ),
//     );

// const findById = async (id ) => {
//   const authorData = await connection().then(db => db.collection('authors').findOne(ObjectId(id)))

//   if(!authorData) return null;

//   const { firstName, middleName, lastName } = authorData;

//   return getNewAuthor({id, firstName, middleName, lastName});
// }

// const create = async (firstName, middleName, lastName) => {
//   connection()
//   .then(db => db.collection('authors').insertOne({firstName, middleName, lastName}))
//   .then(result => getNewAuthor({id: result.insertedId, firstName, middleName, lastName}))
// }

// module.exports = {
//   getAll,
//   findById,
//   // isValid,
//   create,
// };

const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () =>
  connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) =>
      authors.map(({ _id, firstName, middleName, lastName }) => ({
        id: _id,
        firstName,
        middleName,
        lastName,
      }))
    );

const findById = async (id) =>
  connection().then((db) => db.collection('authors').findOne(ObjectId(id)));

const create = async (firstName, middleName, lastName) =>
  connection()
    .then((db) =>
      db.collection('authors').insertOne({ firstName, middleName, lastName })
    )
    .then((result) => result);

module.exports = {
  getAll,
  findById,
  create,
};