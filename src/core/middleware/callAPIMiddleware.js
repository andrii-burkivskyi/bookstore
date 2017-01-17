import { fromJS } from 'immutable';
import { normalize } from 'normalizr';

function runActionWithKey(dispatch, action, state) {
  const {
    types,
    callAPI,
    key,
    schema
  } = action;

  const [REQUEST, SUCCESS, FAILURE] = types;

  dispatch({ type: REQUEST, key });

  return callAPI(state).then(
    (response) => {
      if (response.ok) {
        response.json()
          .then((data) => {
            dispatch({
              type: SUCCESS,
              response: fromJS(
                normalize(data.body, schema)
              ),
              haveNextPage: data.haveNextPage,
              key
            });
          });
      } else {
        response.json()
          .then((data) => {
            dispatch({ type: FAILURE, response: fromJS(data), key });
          });
      }
    }
  );
}

function runActionWithoutKey(dispatch, action, state) {
  const {
    types,
    schema,
    callAPI
  } = action;

  const [REQUEST, SUCCESS, FAILURE] = types;

  dispatch({ type: REQUEST });

  return callAPI(state).then(
    (response) => {
      if (response.ok) {
        response.json()
          .then((data) => {
            const responseData = schema ? normalize(data.body, schema) : data.body;

            dispatch({
              type: SUCCESS,
              response: fromJS(responseData),
              haveNextPage: data.haveNextPage

            });
          });
      } else {
        dispatch({ type: FAILURE, error: response.status });
      }
    }
  );
}

export default function callAPIMiddleware({ dispatch, getState }) {
  return (next) => (action) => {
    const {
      types,
      callAPI,
      shouldCallAPI = () => true,
      key,
      schema
    } = action;

    if (!types) {
      return next(action);
    }

    if (
      !Array.isArray(types) ||
      types.length !== 3 ||
      !types.every((type) => typeof type === 'string')
    ) {
      throw new Error('Expected an array of three string types.');
    }

    if (typeof callAPI !== 'function') {
      throw new Error('Expected callAPI to be a function.');
    }

    if (key && !schema) {
      throw new Error('Expected schema to be required');
    }

    if (!shouldCallAPI(getState())) {
      return null;
    }

    if (key) {
      return runActionWithKey(dispatch, action, getState());
    }

    return runActionWithoutKey(dispatch, action, getState());
  };
}
