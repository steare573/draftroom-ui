/**
 * Available Player  Container component connecting to redux & supplying dependencies to
 * available players template.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import React from 'react';
import AvailableTemplate from './Template';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { draftPlayer, queuePlayer } from '../../../redux/action/draft';
import { getTeamByUserId } from '../../../util';

function AvailableContainer(props) {
  const availablePlayers = props.players.filter((playerObj) => {
    const drafted = props.draftedPlayers.find(draftedPlayerObj =>
      parseInt(draftedPlayerObj.playerId, 10) === parseInt(playerObj.id, 10)
    );
    return drafted === undefined;
  });
  const userTeam = getTeamByUserId(props.teams, props.user.id);
  return (<AvailableTemplate
    {...props}
    draftPlayer={
      (playerId) => {
        const curDrafter = props.teams[
          props.draftedPlayers.length % props.teams.length
        ];

        if (curDrafter && parseInt(curDrafter.id, 10) === parseInt(userTeam.id, 10)) {
          props.draftPlayer(curDrafter.id, playerId);
        }
      }
    }
    availablePlayers={availablePlayers}
    userTeam={userTeam}
  />);
}

AvailableContainer.propTypes = {
  draftPlayer: React.PropTypes.func,
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
  queuePlayer: React.PropTypes.func,
};

export default connect(
  state => ({
    players: state.players,
    user: state.user,
    draftedPlayers: state.draft.draftedPlayers,
    teams: state.league.teams,
  }),
  dispatch => bindActionCreators({ queuePlayer, draftPlayer }, dispatch)
)(AvailableContainer);
