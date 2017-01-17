import { Map, List } from 'immutable';

export function authorSingleDenormalize(authorEntity, booksEntities) {
  let author = authorEntity;

  if (!authorEntity || !booksEntities) { return new Map(); }

  if (authorEntity.has('books')) {
    const books = author.get('books').map((book) => booksEntities.get(book));

    author = author.set('books', books);
  }

  return author;
}

export function authorsListDenormalize(authorsEntities, booksEntities, authorsResults) {
  if (!authorsEntities || !booksEntities || !authorsResults) {
    return new List();
  }

  return authorsResults.map((author) =>
    authorSingleDenormalize(authorsEntities.get(author), booksEntities)
  );
}
