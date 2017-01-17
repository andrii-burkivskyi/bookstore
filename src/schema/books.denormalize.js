import { List, Map } from 'immutable';

export const categoriesListDenormalize =
  (categoriesEntities, categoriesResults) => {
    if (!categoriesEntities || !categoriesResults) {
      return new List();
    }

    return categoriesResults.map((category) => categoriesEntities.get(category));
  };

export const bookSingleDenormalize =
  (bookEntity, authorsEntities, categoriesEntities) => {
    if (!bookEntity || !authorsEntities || !categoriesEntities) {
      return new Map();
    }

    let book = bookEntity;

    if (book.has('authors')) {
      const authors = book.get('authors')
        .map((author) => authorsEntities.get(author));

      book = book.set('authors', authors);
    }

    if (book.has('categories')) {
      const categories = book.get('categories')
        .map((category) => categoriesEntities.get(category));

      book = book.set('categories', categories);
    }

    return book;
  };

export const booksListDenormalize =
  (booksEntities, authorsEntities, categoriesEntities, booksResults) => {
    if (!booksEntities || !authorsEntities || !categoriesEntities || !booksResults) {
      return new List();
    }

    return booksResults.map((book) =>
      bookSingleDenormalize(
        booksEntities.get(book),
        authorsEntities,
        categoriesEntities
      )
    );
  };
