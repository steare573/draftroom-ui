/**
 * Header Container component connecting to redux & supplying dependencies to header template.
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import React from 'react';
import Template from './Template';
import { clearDraft } from '../../redux/action/draft';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function HeaderBarContainer(props) {
  const curDrafter = props.league.teams[
    props.draft.draftedPlayers.length % props.league.teams.length
  ];

  return <Template {...props} curDrafter={curDrafter} />;
}


HeaderBarContainer.propTypes = {
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
  user: React.PropTypes.shape({
    id: React.PropTypes.number,
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string,
  }),
};

export default connect(
  (state) => ({ user: state.user, league: state.league, draft: state.draft }),
  (dispatch) => bindActionCreators({ clearDraft }, dispatch)
)(HeaderBarContainer);
