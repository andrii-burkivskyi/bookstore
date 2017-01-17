export default function getFetchActions(actionName) {
  return {
    REQUEST: `${actionName}_REQUEST`,
    SUCCESS: `${actionName}_SUCCESS`,
    FAILURE: `${actionName}_FAILURE`,
    ALL: [`${actionName}_REQUEST`, `${actionName}_SUCCESS`, `${actionName}_FAILURE`]
  };
}

