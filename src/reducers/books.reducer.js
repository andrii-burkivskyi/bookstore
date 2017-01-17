import pagination from './pagination.js';

import { LOAD_BOOKS } from '../actions/books.actions.js';

export default pagination({
  types: LOAD_BOOKS.ALL,
  getKeyFromAction: (action) => action.key
});
