import { Schema, arrayOf } from 'normalizr';

const book = new Schema('books', { idAttribute: 'slug' });
const author = new Schema('authors', { idAttribute: 'slug' });
const category = new Schema('categories', { idAttribute: 'slug' });

book.define({
  authors: arrayOf(author)
});

export const BOOK = book;
export const BOOKS_LIST = arrayOf(book);
export const CATEGORIES_LIST = arrayOf(category);
