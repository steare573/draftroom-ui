/**
 * Reducer for altering our user data.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import createReducer from '../util/createReducer';

const initialState = {
  firstName: '',
  lastName: '',
  id: 0,
};

export default createReducer(initialState, {
  CLEAR_USER: () => ({}),
  SET_USER: (state, action) => Object.assign({}, state, action.user),
});
