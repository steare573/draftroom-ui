/**
 * Template for displaying our draftboard grid
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import React from 'react';
import { getPlayerById } from '../../../util';

function BoardTemplate(props) {
  const numTeams = props.league.teams;
  const numRounds = props.draft.numRounds;
  const draftedPlayers = props.draft.draftedPlayers;

  const trs = [];

  for (let i = 0; i < numRounds; i++) {
    trs.push(
      <tr key={`board-row-${i}`}>
        {
          numTeams.map(
            (team, index) => {
              if (draftedPlayers[(i * numTeams.length) + index]) {
                const player = getPlayerById(
                      props.players, draftedPlayers[(i * numTeams.length) + index].playerId
                    );
                return (
                  <td key={`board-pos-${i}-${index}`} className={player.position.toLowerCase()}>
                    {player.firstName} {player.lastName} {player.position}
                  </td>
                );
              }
              return <td key={`board-pos-${index}-${i}`}>None</td>;
            }
          )
        }
      </tr>);
  }
  return (
    <div className="tool tool-board">
      <div className="pagination-controls">
        {(() => '< 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 >')()}
      </div>
      <div className="tool-body">
        <table>
          <tbody>
            {trs}
          </tbody>
        </table>
      </div>
    </div>
  );
}

BoardTemplate.propTypes = {
  league: React.PropTypes.shape({
    teams: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number,
      name: React.PropTypes.string,
    })),
    name: React.PropTypes.string,
  }),
  draft: React.PropTypes.shape({
    draftedPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
      playerId: React.PropTypes.number,
      teamId: React.PropTypes.number,
    })),
    numRounds: React.PropTypes.number,
  }),
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string,
    position: React.PropTypes.oneOf(['QB', 'WR', 'RB', 'TE', 'K', 'DST']),
  })),
};

export default BoardTemplate;
