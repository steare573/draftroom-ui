// to be refactored to put events other places, but this basically works
import socket from './socket';

export default (state, dispatch) => {
  socket.on('open', () => {
    dispatch({ type: 'UI_CLIENT_CONNECTED' });
  });

  socket.on('player.drafted', (data) => {
    dispatch({ type: 'APPEND_DRAFTED_PLAYER', userId: data.userId, playerId: data.playerId });
  });

  socket.on('chat.sendmessage.response', (data) => {
    dispatch({ type: 'SET_CHAT_MESSAGES', messages: data.data });
  });

  socket.on('chat.getconversation.response', (data) => {
    dispatch({ type: 'SET_CHAT_MESSAGES', messages: data.data });
  });

  socket.on('draft.player.response', (data) => {
    dispatch({ type: 'SET_DRAFTED_PLAYERS', draftedPlayers: data.data });
  });

  socket.on('draft.getdraftedplayers.response', (data) => {
    dispatch({ type: 'SET_DRAFTED_PLAYERS', draftedPlayers: data.data });
  });

  socket.on('user.getbyid.response', (data) => {
    dispatch({ type: 'SET_USER', user: data.data });
  });

  socket.on('draft.getleague.response', data => {
    dispatch({ type: 'SET_LEAGUE', league: data.data });
  });

  socket.on('draft.unqueueplayer.response', data => {
    dispatch({ type: 'SET_QUEUE_LIST', queue: data.data.queue, teamId: data.data.teamId });
  });

  socket.on('draft.queueplayer.response', (data) => {
    dispatch({ type: 'SET_QUEUE_LIST', queue: data.data.queue, teamId: data.data.teamId });
  });
};
