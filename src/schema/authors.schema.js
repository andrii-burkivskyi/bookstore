import { Schema, arrayOf } from 'normalizr';

const author = new Schema('authors', { idAttribute: 'slug' });
const book = new Schema('books', { idAttribute: 'slug' });

author.define({
  books: arrayOf(book)
});

export const AUTHOR = author;
export const AUTHORS_LIST = arrayOf(author);
