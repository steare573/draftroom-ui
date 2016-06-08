/**
 * Template for displaying players that have been queued by user.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import React from 'react';

function QueueTemplate(props) {
  return (
    <div className="tool tool-queue">
      <div className="tool-title">
        Queued Players
      </div>
      {props.queuedPlayers.map(playerObj => (
        <div>
          {playerObj.firstName}
          {playerObj.lastName}
          {playerObj.position}
          <span onClick={() => props.unqueuePlayer(playerObj.id)}>U</span>
        </div>
      ))}
    </div>
  );
}

QueueTemplate.propTypes = {
  queuedPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string,
    position: React.PropTypes.oneOf(['QB', 'WR', 'RB', 'TE', 'K', 'DST']),
  })),
  unqueuePlayer: React.PropTypes.func,
};

export default QueueTemplate;