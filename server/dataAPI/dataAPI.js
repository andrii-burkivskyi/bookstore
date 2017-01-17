const books = require('../mock/books.json');
const authors = require('../mock/authors.json');
const categories = require('../mock/categories.json');

const itemsOnPage = 30;

function getBookBySlug(slug) {
  const book = books.find((item) =>
    item.slug === slug
  );

  return {
    body: book
  };
}

function getBooksByCategory(category, page) {
  const startItemIndex = itemsOnPage * page;
  const endItemIndex = startItemIndex + itemsOnPage;
  const booksInRange = books.filter((item) =>
    (category === 'all') ||
    (item.categories && item.categories.indexOf(category) > -1)
  );

  return {
    body: booksInRange.slice(startItemIndex, endItemIndex),
    haveNextPage: endItemIndex < booksInRange.length
  };
}

function getCategories() {
  return {
    body: categories
  };
}

function getAuthors(page) {
  const startItemIndex = itemsOnPage * page;
  const endItemIndex = startItemIndex + itemsOnPage;

  return {
    body: authors.slice(startItemIndex, endItemIndex),
    haveNextPage: endItemIndex < authors.length
  };
}

function getAuthorBySlug(slug) {
  const author = authors.find((item) => item.slug === slug);

  return {
    body: author
  };
}

module.exports = {
  getBookBySlug,
  getBooksByCategory,
  getCategories,
  getAuthors,
  getAuthorBySlug
};
