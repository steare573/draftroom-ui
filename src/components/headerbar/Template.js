/**
 * Template for displaying our headerbar (user/league/draftstatus info).
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import React from 'react';

function HeaderBarTemplate(props) {
  const user = props.user || {};
  const curDrafter = props.curDrafter || {};
  return (
    <div className="header-container">
      <div className="league-info">
        <img className="site-logo" alt="logo" src="/static/images/ffbl-logo.png" />
        <div className="site-info">
          <div>Draftroom</div>
          <div>{props.league.name}</div>
        </div>
      </div>
      <div className="draft-info">
        <div className="box-container">
          Current Pick{curDrafter.name}
        </div>
        <div className="box-container">
          Previous Pick
        </div>
        <div className="box-container">
          On Deck
        </div>
        <div className="box-container-half">
          Timer
        </div>
        <div className="box-container-half">
          Picks Remaining
        </div>

      </div>
      <div className="user-info">
        <img src="/static/images/guest.png" alt="guest icon" />
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
