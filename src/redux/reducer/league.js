/**
 * Reducer for altering our league data.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import createReducer from '../util/createReducer';

const initialState = {
  id: 0,
  name: 'Loading League',
  teams: [],
};

export default createReducer(initialState, {
  RESET_LEAGUE: () => ({}),
  SET_LEAGUE: (state, action) => Object.assign({}, state, action.league),
  SET_QUEUE_LIST: (state, action) =>
    Object.assign({}, state, {
      teams: state.teams.map(curTeam => {
        if (curTeam.id === action.teamId) {
          return Object.assign({}, curTeam, { queue: action.queue });
        }
        return curTeam;
      }) }
    ),

});
