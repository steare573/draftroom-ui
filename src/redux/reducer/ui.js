/**
 * Reducer for altering our ui data.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import createReducer from '../util/createReducer';

const initialState = {
  chat: {
    pendingMessage: '',
  },
  roster: {
    filter: 0,
  },
};

export default createReducer(initialState, {
  CLEAR_UI: () => ({}),
  UI_CHAT_SET_PENDING_MESSAGE: (state, action) => {
    const newState = Object.assign({}, state);
    newState.chat.pendingMessage = action.pendingMessage;
    return newState;
  },
  UI_ROSTER_SET_FILTER: (state, action) => {
    const newState = Object.assign({}, state);
    newState.roster.filter = action.userId;
    return newState;
  },
});
