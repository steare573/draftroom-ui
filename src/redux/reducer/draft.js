/**
 * Reducer for altering our draft data.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import createReducer from '../util/createReducer';

const initialState = {
  id: 1,
  start: new Date(),
  rosters: [],
  timeLimit: 90,
  currentTime: new Date(),
  leagueId: 1,
  teamStatus: {
    1: 'active',
    2: 'inactive',
  },
  numRounds: 10,
  chat: [],
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
  SET_CHAT_MESSAGES: (state, action) => Object.assign({}, state, { chat: action.messages }),
  APPEND_DRAFTED_PLAYER: (state, action) => {
    const newState = Object.assign({}, state);
    newState.draftedPlayers = Array.from(state.draftedPlayers);
    newState.draftedPlayers.push({ userId: action.userId, playerId: action.playerId });
    return newState;
  },
  SET_DRAFTED_PLAYERS: (state, action) =>
    Object.assign({}, state, { draftedPlayers: action.draftedPlayers }),
  SET_DRAFTID: (state, action) => Object.assign({}, state, { id: action.draftId }),
  APPEND_QUEUE_PLAYER: (state, action) => {
    const newState = Object.assign({}, state);
    newState.queue = Array.from(state.queue);
    if (newState.queue.indexOf(action.playerId) === -1) {
      newState.queue.push(action.playerId);
    }
    return newState;
  },
  REMOVE_QUEUE_PLAYER: (state, action) =>
    Object.assign({}, state, {
      queue: Array.from(state.queue.filter(
        playerId => parseInt(playerId, 10) !== parseInt(action.playerId, 10)
      )),
    }),
});

export default draftReducers;
