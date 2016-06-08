/**
 * Actions reliating to our ui data
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

export const chatSetPendingMessage = (msg) => ({
  type: 'UI_CHAT_SET_PENDING_MESSAGE',
  pendingMessage: msg,
});

export const setRosterFilter = (userId) => ({
  type: 'UI_ROSTER_SET_FILTER',
  userId,
});
