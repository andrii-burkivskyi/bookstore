import { fromJS } from 'immutable';

export const initialState = fromJS({
  isFetching: false,
  page: 0,
  haveNextPage: true,
  list: []
});

export default function pagination(reducer) {
  const {
    types,
    getListFromAction = (response) => response.get('result'),
    getKeyFromAction
  } = reducer;

  if (typeof getListFromAction !== 'function') {
    throw new Error('Expected getListFromAction to be a function.');
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected types tobe an array with 3 elements.');
  }

  const [REQUEST, SUCCESS, FAILURE] = types;

  function corePagination(state = initialState, action) {
    switch (action.type) {
      case REQUEST: {
        return state.set('isFetching', true);
      }

      case SUCCESS: {
        const response = action.response;
        const list = getListFromAction(response);

        return state
          .set('list', state.get('list').concat(list))
          .set('page', state.get('page') + 1)
          .set('haveNextPage', action.haveNextPage)
          .set('isFetching', false);
      }

      case FAILURE: {
        return state
          .set('error', action.response)
          .set('isFetching', false);
      }

      default: {
        return state;
      }
    }
  }

  if (typeof getKeyFromAction !== 'function') {
    return corePagination;
  }

  return (state = fromJS({}), action) => {
    switch (action.type) {
      case REQUEST:
      case SUCCESS:
      case FAILURE: {
        const key = getKeyFromAction(action);

        if (typeof key !== 'string') {
          throw new Error('Expected key of pagination reducer should be a string');
        }

        return state
          .set(key, corePagination(state.get(key), action));
      }
      default: {
        return state;
      }
    }
  };
}

