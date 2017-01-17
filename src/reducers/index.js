import { combineReducers } from 'redux-immutable';

import entities from './entities.reducer.js';
import routing from './routing.reducer.js';
import books from './books.reducer.js';
import authors from './authors.reducer.js';
import categories from './categories.reducer.js';

export default combineReducers({
  entities,
  routing,
  books,
  authors,
  categories
});

