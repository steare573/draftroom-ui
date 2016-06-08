/**
 * Main reducer combining all of our smaller, more specific reducers.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import { combineReducers } from 'redux';
import draft from './draft';
import user from './user';
import league from './league';
import players from './players';
import ui from './ui';

export default combineReducers({
  draft,
  user,
  league,
  players,
  ui,
});
