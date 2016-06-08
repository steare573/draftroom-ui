/**
 * Actions relating to our user data
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

export const queuePlayer = playerId => (
  {
    type: 'QUEUE_PLAYER',
    playerId,
  }
);

export const unqueuePlayer = playerId => (
  {
    type: 'UNQUEUE_PLAYER',
    playerId,
  }
);
