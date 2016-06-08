/**
 * Template for displaying our headerbar (user/league/draftstatus info).
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import React from 'react';

function HeaderBarTemplate(props) {
  const user = props.user || {};
  return (
    <div className="header-container">
      <div className="league-info">
        {props.league.name}
      </div>
      <div className="draft-info">
        Currently Drafting {props.curDrafter.name}
      </div>
      <div className="user-info">
        {user.firstName} {user.lastName}
      </div>
    </div>
  );
}

HeaderBarTemplate.propTypes = {
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
  curDrafter: React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
  }),
};

export default HeaderBarTemplate;
