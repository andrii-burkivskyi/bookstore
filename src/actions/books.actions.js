import * as dataAPI from '../api/data.api.js';
import { BOOK, BOOKS_LIST, CATEGORIES_LIST } from '../schema/books.schema.js';
import getFetchActions from '../core/utils/getFetchActions.js';

export const LOAD_BOOKS = getFetchActions('LOAD_BOOKS');
export const LOAD_BOOK = getFetchActions('LOAD_BOOK');
export const LOAD_CATEGORIES = getFetchActions('LOAD_CATEGORIES');

export function loadBook(slug) {
  return {
    types: LOAD_BOOK.ALL,
    callAPI: () => dataAPI.loadBook(slug),
    schema: BOOK
  };
}

export function loadBooks(category) {
  return {
    types: LOAD_BOOKS.ALL,
    callAPI: () => dataAPI.loadBooks(category),
    shouldCallAPI: (state) =>
      !state.getIn(['books', category]) ||
      !state.getIn(['books', category, 'list']).size,
    schema: BOOKS_LIST,
    key: category
  };
}

export function loadMoreBooks(category) {
  return {
    types: LOAD_BOOKS.ALL,
    callAPI: (state) => dataAPI.loadBooks(category, state.getIn(['books', category, 'page'])),
    schema: BOOKS_LIST,
    key: category
  };
}

export function loadCategories() {
  return {
    types: LOAD_CATEGORIES.ALL,
    callAPI: () => dataAPI.loadCategories(),
    shouldCallAPI: (state) => !state.getIn(['categories', 'list']).size,
    schema: CATEGORIES_LIST
  };
}
