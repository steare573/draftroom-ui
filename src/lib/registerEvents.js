// to be refactored to put events other places, but this basically works
import socket from './socket';

export default (state, dispatch) => {
  socket.on('open', () => {
    dispatch({ type: 'UI_CLIENT_CONNECTED' });
  });
};
