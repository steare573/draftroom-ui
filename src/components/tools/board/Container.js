/**
 * Draftboard Container component connecting to redux & supplying dependencies to draftboardtemplate
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import React from 'react';
import BoardTemplate from './Template';
import { connect } from 'react-redux';

function BoardContainer(props) {
  return <BoardTemplate { ...props } />;
}

BoardContainer.propTypes = {
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
  }),
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string,
    position: React.PropTypes.oneOf(['QB', 'WR', 'RB', 'TE', 'K', 'DST']),
  })),
};

export default connect(
  state => ({ league: state.league, draft: state.draft, players: state.players })
)(BoardContainer);
