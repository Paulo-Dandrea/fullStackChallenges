const Author = require('../model/Author');

const listAuthors = async (req, res) => {
  const authors = await Author.getAll();

  res.render('authors', { authors });
};

async function showAuthor(req, res) {
  const { id } = req.params;
  const author = await Author.findById(id)

  if(!author) return res.status(400).render('404');

  res.render('authors/show', { author } )
}

module.exports = {
  listAuthors,
  showAuthor,
}