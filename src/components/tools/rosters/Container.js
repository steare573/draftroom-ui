/**
 * Roster Tool Container component connecting to redux & supplying dependencies to roster template.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import React from 'react';
import RostersTemplate from './Template';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setRosterFilter } from '../../../redux/action/ui';

function RostersContainer(props) {
  const curRosters = {};
  props.draftedPlayers.forEach(player => {
    if (Object.keys(curRosters).indexOf(player.teamId.toString()) === -1) {
      curRosters[player.teamId] = [
        props.players.find(
          playerRecord => parseInt(playerRecord.id, 10) === parseInt(player.playerId, 10)
        ),
      ];
    } else {
      curRosters[player.teamId].push(
        props.players.find(
          playerRecord => parseInt(playerRecord.id, 10) === parseInt(player.playerId, 10)
        )
      );
    }
  });

  return (
    <RostersTemplate
      rosterFilter={props.rosterFilter}
      rosters={curRosters}
      teams={props.teams}
      changeActiveRoster={userId => { props.setRosterFilter(userId); }}
    />
  );
}


RostersContainer.propTypes = {
  rosterFilter: React.PropTypes.string,
  teams: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
  })),
  setRosterFilter: React.PropTypes.func,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string,
    position: React.PropTypes.oneOf(['QB', 'WR', 'RB', 'TE', 'K', 'DST']),
  })),
  draftedPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
    userId: React.PropTypes.number,
    playerId: React.PropTypes.number,
  })),
  user: React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
  }),
};

export default connect(
  state => ({
    draftedPlayers: state.draft.draftedPlayers,
    teams: state.league.teams,
    players: state.players,
    rosterFilter: state.ui.roster.filter,
    user: state.user,
  }),
  dispatch => bindActionCreators({ setRosterFilter }, dispatch)
)(RostersContainer);
