import { createSelector } from 'reselect';

import {
  categoriesListDenormalize,
  bookSingleDenormalize,
  booksListDenormalize
} from '../schema/books.denormalize.js';

const getBookEntities = (state, book) => state.getIn(['entities', 'books', book]);
const getBooksEntities = (state) => state.getIn(['entities', 'books']);
const getCategoriesEntities = (state) => state.getIn(['entities', 'categories']);
const getAuthorsEntities = (state) => state.getIn(['entities', 'authors']);

const getCategoriesResults = (state) =>
  state.getIn(['categories', 'list']);
const getBooksResultsByCategory = (state, category) =>
  state.getIn(['books', category, 'list']);

export const getCategories = createSelector(
  getCategoriesEntities,
  getCategoriesResults,
  categoriesListDenormalize
);

export const getBookSingle = createSelector(
  getBookEntities,
  getAuthorsEntities,
  getCategoriesEntities,
  bookSingleDenormalize
);

export const getBooksListByCategory = createSelector(
  getBooksEntities,
  getAuthorsEntities,
  getCategoriesEntities,
  getBooksResultsByCategory,
  booksListDenormalize
);
