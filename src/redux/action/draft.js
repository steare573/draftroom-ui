/**
 * Actions relating to our draft data
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

export const resetDraft = () =>
  ({
    type: 'RESET_DRAFT',
  });

export const clearDraft = () => ({ type: 'CLEAR_DRAFT' });

export const chatSendMessage = (teamId, message) => (
  {
    type: 'CHAT_SEND_MESSAGE',
    toServer: {
      transport: 'socket',
      data: {
        teamId,
        message,
      },
      event: 'chat.sendmessage',
    },
  }
);

export const getChatMessages = (roomId) => (
  {
    type: 'CHAT_GET_MESSAGES',
    toServer: {
      transport: 'socket',
      data: {
        roomId,
      },
      event: 'chat.getconversation',
    },
  }
);

export const getDraftedPlayers = (roomId) => (
  {
    type: 'GET_DRAFTED_PLAYERS',
    toServer: {
      transport: 'socket',
      data: {
        roomId,
      },
      event: 'draft.getdraftedplayers',
    },
  }
);

export const draftPlayer = (teamId, playerId) => (
  {
    type: 'DRAFT_PLAYER',
    toServer: {
      transport: 'socket',
      data: {
        teamId,
        playerId,
      },
      event: 'draft.player',
    },
  }
);

export const setDraftedPlayers = (draftedPlayers) => (
  {
    type: 'SET_DRAFTED_PLAYERS',
    draftedPlayers,
  }
);

export const setChatMessages = (messagesArray) => (
  {
    type: 'SET_CHAT_MESSAGES',
    messages: messagesArray,
  }
);

export const setDraftId = (draftId) => (
  {
    type: 'SET_DRAFTID',
    draftId,
  }
);

export const queuePlayer = (playerId, teamId) => (
  {
    type: 'QUEUE_PLAYER',
    toServer: {
      transport: 'socket',
      data: {
        playerId,
        teamId,
      },
      event: 'draft.queueplayer',
    },
  }
);

export const unqueuePlayer = (playerId, teamId) => (
  {
    type: 'UNQUEUE_PLAYER',
    toServer: {
      transport: 'socket',
      data: {
        playerId,
        teamId,
      },
      event: 'draft.unqueueplayer',
    },
  }
);
