const Author = require('../model/Author');

const listAuthors = async (req, res) => {
  const authors = await Author.getAll();

  res.render('authors', { authors });
};

module.exports = {
  listAuthors
}