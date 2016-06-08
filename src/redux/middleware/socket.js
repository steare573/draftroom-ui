import isObject from 'lodash.isobject';
import socket from '../../lib/socket';

export default store => next => action => {
  if (action && isObject(action.toServer) && action.toServer.transport === 'socket') {
    socket.send(action.toServer.event, action.toServer.data, (...args) => {
      action.toServer.callback(args, store.dispatch, store.getState);
    });
  } else {
    next(action);
  }
};
