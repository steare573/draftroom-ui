import React from 'react';
import { connect } from 'react-redux';
import registerEvents from '../lib/registerEvents';
import socket from '../lib/socket';
import { getChatMessages, getDraftedPlayers, setDraftId } from '../redux/action/draft';
import { getLeagueByDraftId } from '../redux/action/league';
import { getUser } from '../redux/action/user';
import queryString from 'query-string';

class SocketInitializer extends React.Component {

  constructor(props) {
    super(props);
    registerEvents(props, props.dispatch);
    const qsObject = queryString.parse(window.location.search);
    props.dispatch(setDraftId(qsObject));
    socket.send(
      'init', { roomId: qsObject.roomId, userId: qsObject.userId }, () => {
        props.dispatch(getChatMessages(qsObject.roomId));
        props.dispatch(getDraftedPlayers(qsObject.roomId));
        props.dispatch(getUser(qsObject.userId));
        props.dispatch(getLeagueByDraftId(qsObject.roomId));
      }
    );
  }

  render() {
    return <div className="socket-initializer" style={{ display: 'none' }}></div>;
  }
}

SocketInitializer.propTypes = {
  dispatch: React.PropTypes.func,
};

export default connect(
  state => state
)(SocketInitializer);
