// export const ADD_NAME = 'ADD_NAME';
// export const ADD_EMAIL = 'ADD_EMAIL';
// export const ADD_BAND = 'ADD_BAND';


export const ADD_USER = 'ADD_USER';

const addUser = (user) => (
  {
    type: ADD_USER,
    user
  }
)

export default addUser;
// nao to te ouvindo