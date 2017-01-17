import { createSelector } from 'reselect';
import { authorSingleDenormalize, authorsListDenormalize } from '../schema/authors.denormalize.js';

const getAuthorEntity = (state, slug) => state.getIn(['entities', 'authors', slug]);
const getAuthorsEntities = (state) => state.getIn(['entities', 'authors']);
const getBooksEntities = (state) => state.getIn(['entities', 'books']);

const getAuthorsResults = (state) => state.getIn(['authors', 'list']);

export const getAuthorSingle = createSelector(
  getAuthorEntity,
  getBooksEntities,
  authorSingleDenormalize
);

export const getAuthorsList = createSelector(
  getAuthorsEntities,
  getBooksEntities,
  getAuthorsResults,
  authorsListDenormalize
);
