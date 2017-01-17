import * as dataAPI from '../api/data.api.js';
import { AUTHOR, AUTHORS_LIST } from '../schema/authors.schema.js';
import getFetchActions from '../core/utils/getFetchActions.js';

export const LOAD_AUTHORS = getFetchActions('LOAD_AUTHORS');
export const LOAD_AUTHOR = getFetchActions('LOAD_AUTHOR');

export function loadAuthors() {
  return {
    types: LOAD_AUTHORS.ALL,
    callAPI: () => dataAPI.loadAuthors(),
    shouldCallAPI: (state) =>
      !state.getIn(['authors']) ||
      !state.getIn(['authors', 'list']).size,
    schema: AUTHORS_LIST
  };
}

export function loadMoreAuthors() {
  return {
    types: LOAD_AUTHORS.ALL,
    callAPI: (state) => dataAPI.loadAuthors(state.getIn(['authors', 'page'])),
    schema: AUTHORS_LIST
  };
}

export function loadAuthor(slug) {
  return {
    types: LOAD_AUTHOR.ALL,
    callAPI: () => dataAPI.loadAuthor(slug),
    schema: AUTHOR
  };
}

