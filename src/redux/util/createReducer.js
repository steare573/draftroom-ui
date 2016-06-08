export default (initialState, fnMap) =>
  (state = initialState, action) => {
    if (typeof fnMap[action.type] === 'function') {
      return fnMap[action.type](state, action);
    }
    return state;
  };

