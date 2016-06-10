/**
 * Template for displaying all current rosters
 *
 * @author Sean Teare <steare573@gmail.com>
 * @since 2016-06-08
 */

import React from 'react';

function RostersTemplate(props) {
  return (
    <div className="tool tool-rosters">
      <div className="tool-title">
        Rosters
      </div>
      <div className="roster-filter">
        <select onChange={(e) => { props.changeActiveRoster(e.target.value); }}>
          <option value="0">None</option>
          {
            props.teams.map(curTeam =>
              <option
                key={`roster-filter-team-${curTeam.id}`}
                value={curTeam.id}
              >
                {curTeam.name}
              </option>
            )
          }
        </select>
      </div>
      <div className="roster-display">
        {
          props.rosters[props.rosterFilter] ?
            props.rosters[props.rosterFilter].map(curPlayer => (
              <div key={`roster-player-${curPlayer.id}`}>
                {curPlayer.firstName} {curPlayer.lastName} {curPlayer.position}
              </div>
            ))
            : <div>No players rostered</div>
        }
      </div>
    </div>
  );
}

RostersTemplate.propTypes = {
  changeActiveRoster: React.PropTypes.func,
  teams: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
  })),
  rosterFilter: React.PropTypes.string,
  rosters: React.PropTypes.object,
  // need to specify what rosters really contains
};

export default RostersTemplate;
