import pagination from './pagination.js';

import { LOAD_AUTHORS } from '../actions/authors.actions.js';

export default pagination({
  types: LOAD_AUTHORS.ALL
});
