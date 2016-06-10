import isObject from 'lodash.isobject';
import socket from '../../lib/socket';

export default store => next => action => {
  if (action && isObject(action.toServer) && action.toServer.transport === 'socket') {
    const callback = action.toServer.callback || function noop() {};
    socket.send(action.toServer.event, action.toServer.data, (...args) => {
      callback(args, store.dispatch, store.getState);
    });
  } else {
    next(action);
  }
};
