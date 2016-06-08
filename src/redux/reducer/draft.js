/**
 * Reducer for altering our draft data.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import createReducer from '../util/createReducer';

const initialState = {
  start: new Date(),
  rosters: [],
  timeLimit: 90,
  currentTime: new Date(),
  teamStatus: {
    1: 'active',
    2: 'inactive',
  },
  numRounds: 10,
  chat: [
    {
      message: 'Test Message',
      sender: 3,
    },
  ],
  draftedPlayers: [
  ],
};

const draftReducers = createReducer(initialState, {
  RESET_DRAFT: () => initialState,
  CLEAR_DRAFT: () => ({}),
  CHAT_APPEND_MESSAGE: (state, action) => {
    const newState = Object.assign({}, state);
    newState.chat = Array.from(state.chat);
    newState.chat.push({ message: action.message, sender: action.userId });
    return newState;
  },
  DRAFT_PLAYER: (state, action) => {
    const newState = Object.assign({}, state);
    newState.draftedPlayers = Array.from(state.draftedPlayers);
    newState.draftedPlayers.push({ userId: action.userId, playerId: action.playerId });
    return newState;
  },
});

export default draftReducers;
