/**
 * Reducer for altering our player data.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import createReducer from '../util/createReducer';

const initialState = [
  {
    id: 1,
    firstName: 'Adrian',
    lastName: 'Peterson',
    position: 'RB',
  }, {
    id: 2,
    firstName: 'Aaron',
    lastName: 'Rodgers',
    position: 'QB',
  }, {
    id: 3,
    firstName: 'Dez',
    lastName: 'Bryant',
    position: 'WR',
  },
];

export default createReducer(initialState, {
  CLEAR_PLAYERS: () => ({}),
});
