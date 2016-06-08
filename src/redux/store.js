/**
 * Redux store
 *
 * TODO: only load devtools in dev
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import { createStore } from 'redux';
import reducer from './reducer';

function configureStore(initialState) {
  const store = createStore(reducer, initialState,
    window.devToolsExtension && window.devToolsExtension()
  );
  return store;
}

export default configureStore({});
