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

export const chatSendMessage = (userId, message) => (
  {
    type: 'CHAT_SEND_MESSAGE',
    userId,
    message,
  }
);

export const draftPlayer = (userId, playerId) => (
  {
    type: 'DRAFT_PLAYER',
    userId,
    playerId,
  }
);
