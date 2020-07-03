//O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/users/tryber/repos', faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

const url100page = 'https://api.github.com/users/tryber/repos?per_page=100 ';

const toDoRepo = 'sd-01-week4-5-project-todo-list';
const memeRepo = 'sd-01-week4-5-project-meme-generator';

describe('Testing GitHub Api', () => {
  it('should contains toDoRepo ', async () => {
    expect.assertions(1);
    await expect(getRepos(url100page)).resolves.toContain(toDoRepo);
  });
  it('should contains memeRepo ', async () => {
    expect.assertions(1);
    await expect(getRepos(url100page)).resolves.toContain(memeRepo);
  });
});
