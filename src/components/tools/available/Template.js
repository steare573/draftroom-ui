/**
 * Template for displaying our available, undrafted players
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import React from 'react';

function AvailableTemplate(props) {
  return (
    <div className="tool tool-available">
      <div className="tool-title">
        Available Players
      </div>
      {
        props.availablePlayers.map((player) => (
          <div key={`available-player-${player.id}`}>
            <span onClick={() => { props.draftPlayer(player.id); }}>
              {player.firstName} {player.lastName} {player.position}
            </span>
            <span onClick={() => { props.queuePlayer(player.id); }}>Q</span>
          </div>
        ))
      }
    </div>
  );
}

AvailableTemplate.propTypes = {
  draftPlayer: React.PropTypes.func,
  queuePlayer: React.PropTypes.func,
  draftedPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
    playerId: React.PropTypes.number,
    userId: React.PropTypes.number,
  })),
  teams: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
  })),
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string,
    position: React.PropTypes.oneOf(['QB', 'WR', 'RB', 'TE', 'K', 'DST']),
  })),
  user: React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
  }),
};

export default AvailableTemplate;
