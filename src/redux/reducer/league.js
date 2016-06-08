/**
 * Reducer for altering our league data.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import createReducer from '../util/createReducer';

const initialState = {
  name: 'My league',
  teams: [
    {
      id: 3,
      userId: 2,
      name: 'Team 1',
    },
    {
      id: 4,
      userId: 4,
      name: 'Team 2',
    },
  ],
};

export default createReducer(initialState, {
  RESET_LEAGUE: () => ({}),
});
