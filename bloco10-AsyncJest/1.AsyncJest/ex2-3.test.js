// O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma *Promise*, que é utilizada pelo método `getUserName`.

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then((user) => user.name);
};

// Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users, para saber quais IDs existem.

test('usuario encontrado', () => {
  expect.assertions(1);
  return getUserName(4).then((e) => expect(e).toBe('Mark'));
});

test('should return a error when user isnt found', () => {
  expect.assertions(1);
  return getUserName(1).catch((e) =>
    expect(e).toEqual({ error: 'User with ' + 1 + ' not found.' }),
  );
});

//Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.

// Dica: Utilize o try/catch para o caso de erro.

test('usuario encontrado no async await', async () => {
  expect.assertions(1);
  const user = await getUserName(4);
  expect(user).toBe('Mark');
});

test('error with try and catch', async () => {
  expect.assertions(1);
  try {
    await getUserName(1);
  } catch (error) {
    expect(error).toEqual({ error: 'User with ' + 1 + ' not found.' });
  }
});
