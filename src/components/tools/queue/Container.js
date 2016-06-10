/**
 * Queue Tool Container component connecting to redux & supplying dependencies to queue template.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import React from 'react';
import QueueTemplate from './Template';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { unqueuePlayer } from '../../../redux/action/draft';
import { getTeamByUserId } from '../../../util';

class QueueContainer extends React.Component {
  render() {
    const userTeam = getTeamByUserId(this.props.teams, this.props.user.id) || {};

    const userQueue = userTeam.queue || [];
    const queuedPlayerList = userQueue.map(playerId =>
      this.props.players.find(player => parseInt(player.id, 10) === parseInt(playerId, 10))
    );

    const availableQueuedPlayers = queuedPlayerList.filter((playerObj) => {
      const drafted = this.props.draftedPlayers.find(draftedPlayerObj =>
        parseInt(draftedPlayerObj.playerId, 10) === parseInt(playerObj.id, 10)
      );

      return drafted === undefined;
    });

    return (
      <QueueTemplate
        queuedPlayers={availableQueuedPlayers}
        unqueuePlayer={this.props.unqueuePlayer}
        userTeam={userTeam}
      />
    );
  }
}

QueueContainer.propTypes = {
  draftedPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
    playerId: React.PropTypes.number,
    userId: React.PropTypes.number,
  })),
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string,
    position: React.PropTypes.oneOf(['QB', 'WR', 'RB', 'TE', 'K', 'DST']),
  })),
  user: React.PropTypes.shape({
    id: React.PropTypes.number,
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string,
    queue: React.PropTypes.arrayOf(React.PropTypes.number),
  }),
  unqueuePlayer: React.PropTypes.func,
  teams: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    queue: React.PropTypes.arrayOf(React.PropTypes.number),
  })),
};

export default connect(
  state => ({
    user: state.user,
    players: state.players,
    draftedPlayers: state.draft.draftedPlayers,
    teams: state.league.teams,
  }),
  dispatch => bindActionCreators({ unqueuePlayer }, dispatch)
)(QueueContainer);
