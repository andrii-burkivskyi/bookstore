import pagination from './pagination.js';

import { LOAD_CATEGORIES } from '../actions/books.actions.js';

export default pagination({
  types: LOAD_CATEGORIES.ALL
});
