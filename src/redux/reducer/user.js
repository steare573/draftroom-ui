/**
 * Reducer for altering our user data.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import createReducer from '../util/createReducer';

const initialState = {
  firstName: 'Sean',
  lastName: 'Teare',
  id: 2,
  queue: [],
};

export default createReducer(initialState, {
  CLEAR_USER: () => ({}),
  QUEUE_PLAYER: (state, action) => {
    const newState = Object.assign({}, state);
    newState.queue = Array.from(state.queue);
    if (newState.queue.indexOf(action.playerId) === -1) {
      newState.queue.push(action.playerId);
    }
    return newState;
  },
  UNQUEUE_PLAYER: (state, action) =>
    Object.assign({}, state, {
      queue: Array.from(state.queue.filter(
        playerId => parseInt(playerId, 10) !== parseInt(action.playerId, 10)
      )),
    }),
});
