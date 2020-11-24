const connection = require('./connection');

const getAll = async () =>
  connection
    .execute('SELECT * FROM user_exercises.users')
    .then(([results]) => results); // o [results] é para desestruturar e pegar o primeiro valor do array

const getById = async (id) =>
  connection
    .execute('SELECT * FROM user_exercises.users WHERE id = ?', [id])
    .then(([[usuario]]) => usuario || null); // dois pares de colchetes para desestrutura o retorno que já tá desestruturado
// - Se não tiver nenhum usuario, retorna null

const userIsValid = (first_name, last_name, email, password) => {
  if (!first_name || typeof first_name !== 'string') return false;
  if (!last_name || typeof last_name !== 'string') return false;
  if (!email || typeof email !== 'string') return false;
  if (!password || typeof password !== 'string' || password.length < 6)
    return false;

  return true;
};

const createNewUser = async (first_name, last_name, email, password) => {
  return connection.execute(
    'INSERT INTO user_exercises.users ( first_name, last_name, email, password ) VALUES (?, ?, ?, ?);',
    [first_name, last_name, email, password],
  );
};

const update = async (id, first_name, last_name, email, password) => {
  await connection.execute(
    'UPDATE user_exercises.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?',
    [first_name, last_name, email, password, id],
  );
};

const exclude = async (id) =>
  connection.execute('DELETE FROM user_exercises.users WHERE id = ?', [id]);

module.exports = {
  createNewUser,
  userIsValid,
  getAll,
  getById,
  update,
  exclude,
};
