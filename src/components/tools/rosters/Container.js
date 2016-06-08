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
import { getTeamByUserId } from '../../../util';

class RostersContainer extends React.Component {
  componentDidMount() {
    if (!this.props.rosterFilter) {
      this.props.setRosterFilter(getTeamByUserId(this.props.teams, this.props.user.id).id);
    }
  }
  render() {
    const curRosters = {};
    this.props.draftedPlayers.forEach(player => {
      if (Object.keys(curRosters).indexOf(player.userId) === -1) {
        curRosters[player.userId] = [
          this.props.players.find(
            playerRecord => parseInt(playerRecord.id, 10) === parseInt(player.playerId, 10)
          ),
        ];
      } else {
        curRosters[player.userId].push(
          this.props.players.find(
            playerRecord => parseInt(playerRecord.id, 10) === parseInt(player.playerId, 10)
          )
        );
      }
    });

    return (
      <RostersTemplate
        rosterFilter={this.props.rosterFilter}
        rosters={curRosters}
        teams={this.props.teams}
        changeActiveRoster={userId => { this.props.setRosterFilter(userId); }}
      />
    );
  }
}

RostersContainer.propTypes = {
  rosterFilter: React.PropTypes.number,
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
