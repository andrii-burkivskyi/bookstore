import { browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import callAPIMiddleware from '../middleware/callAPIMiddleware.js';

import reducers from '../../reducers';

export default createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(browserHistory),
      thunk,
      callAPIMiddleware
    )
  )
);

