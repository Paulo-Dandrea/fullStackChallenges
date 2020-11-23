const connection = require('./connection');

const userIsValid = (first_name, last_name, email, password ) => {
  if(!first_name || typeof first_name !== 'string') return false;
  if(!last_name || typeof last_name !== 'string') return false;
  if(!email || typeof email !== 'string') return false;
  if(!password || typeof password !== 'string' || password.length < 6) return false;

  return true;
}

const createNewUser = async ( first_name, last_name, email, password ) => {
  return connection.execute(
    'INSERT INTO user_exercises.users ( first_name, last_name, email, password ) VALUES (?, ?, ?, ?);',
    [first_name, last_name, email, password]
  )
}

module.exports = {
  createNewUser,
  userIsValid
}