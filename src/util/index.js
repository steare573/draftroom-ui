/**
 * Utility functions to isolate code that is commonly used
 */
export const getPlayerById = (players, id) =>
  players.find(curPlayer => parseInt(curPlayer.id, 10) === parseInt(id, 10)) || {};

export const getTeamById = (teams, id) =>
  teams.find(curTeam => parseInt(curTeam.id, 10) === parseInt(id, 10)) || {};

export const getTeamByUserId = (teams, userId) =>
  teams.find(curTeam => parseInt(curTeam.userId, 10) === parseInt(userId, 10)) || {};

